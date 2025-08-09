interface UptimeConfig {
  url: string;
  interval: number; // minutes
  timeout: number; // seconds
  expectedStatus: number;
}

interface UptimeCheck {
  timestamp: number;
  status: 'up' | 'down' | 'timeout';
  responseTime: number;
  statusCode?: number;
  error?: string;
}

class UptimeMonitor {
  private config: UptimeConfig;
  private checks: UptimeCheck[] = [];
  private isRunning = false;

  constructor(config: UptimeConfig) {
    this.config = config;
  }

  async start() {
    if (this.isRunning) return;
    this.isRunning = true;
    
    this.scheduleCheck();
  }

  stop() {
    this.isRunning = false;
  }

  private scheduleCheck() {
    if (!this.isRunning) return;
    
    setTimeout(async () => {
      await this.performCheck();
      this.scheduleCheck();
    }, this.config.interval * 60 * 1000);
  }

  private async performCheck(): Promise<UptimeCheck> {
    const startTime = Date.now();
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout * 1000);
      
      const response = await fetch(this.config.url, {
        signal: controller.signal,
        method: 'HEAD',
      });
      
      clearTimeout(timeoutId);
      
      const responseTime = Date.now() - startTime;
      const check: UptimeCheck = {
        timestamp: Date.now(),
        status: response.status === this.config.expectedStatus ? 'up' : 'down',
        responseTime,
        statusCode: response.status,
      };
      
      this.checks.push(check);
      this.cleanupOldChecks();
      
      if (check.status === 'down') {
        await this.sendAlert(check);
      }
      
      return check;
      
    } catch (error) {
      const responseTime = Date.now() - startTime;
      const check: UptimeCheck = {
        timestamp: Date.now(),
        status: 'timeout',
        responseTime,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
      
      this.checks.push(check);
      this.cleanupOldChecks();
      
      await this.sendAlert(check);
      return check;
    }
  }

  private cleanupOldChecks() {
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    this.checks = this.checks.filter(check => check.timestamp > oneWeekAgo);
  }

  private async sendAlert(check: UptimeCheck) {
    const alertData = {
      url: this.config.url,
      status: check.status,
      timestamp: new Date(check.timestamp).toISOString(),
      responseTime: check.responseTime,
      statusCode: check.statusCode,
      error: check.error,
    };

    // Send to webhook/email service
    try {
      await fetch('/api/uptime-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alertData),
      });
    } catch (error) {
      console.error('Failed to send uptime alert:', error);
    }
  }

  getUptime(period: '24h' | '7d' | '30d' = '24h'): number {
    const now = Date.now();
    let periodMs: number;
    
    switch (period) {
      case '24h': periodMs = 24 * 60 * 60 * 1000; break;
      case '7d': periodMs = 7 * 24 * 60 * 60 * 1000; break;
      case '30d': periodMs = 30 * 24 * 60 * 60 * 1000; break;
    }
    
    const periodChecks = this.checks.filter(
      check => check.timestamp > now - periodMs
    );
    
    if (periodChecks.length === 0) return 100;
    
    const upChecks = periodChecks.filter(check => check.status === 'up').length;
    return (upChecks / periodChecks.length) * 100;
  }

  getAverageResponseTime(period: '24h' | '7d' | '30d' = '24h'): number {
    const now = Date.now();
    let periodMs: number;
    
    switch (period) {
      case '24h': periodMs = 24 * 60 * 60 * 1000; break;
      case '7d': periodMs = 7 * 24 * 60 * 60 * 1000; break;
      case '30d': periodMs = 30 * 24 * 60 * 60 * 1000; break;
    }
    
    const periodChecks = this.checks.filter(
      check => check.timestamp > now - periodMs && check.status === 'up'
    );
    
    if (periodChecks.length === 0) return 0;
    
    const totalResponseTime = periodChecks.reduce((sum, check) => sum + check.responseTime, 0);
    return totalResponseTime / periodChecks.length;
  }

  getRecentChecks(limit = 50): UptimeCheck[] {
    return this.checks.slice(-limit);
  }
}

// Initialize monitoring for production
export const uptimeMonitor = new UptimeMonitor({
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkandscale.site',
  interval: 5, // 5 minutes
  timeout: 30, // 30 seconds
  expectedStatus: 200,
});

// Auto-start in browser (production only)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  setTimeout(() => uptimeMonitor.start(), 5000); // 5s delay for stability
}