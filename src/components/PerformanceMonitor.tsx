"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WebVital {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  threshold: { good: number; poor: number };
}

interface PerformanceMetrics {
  lcp: WebVital; // Largest Contentful Paint
  fid: WebVital; // First Input Delay  
  cls: WebVital; // Cumulative Layout Shift
  fcp: WebVital; // First Contentful Paint
  ttfb: WebVital; // Time to First Byte
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uptime, setUptime] = useState({ '24h': 0, '7d': 0, '30d': 0, avgResponse: 0 });

  useEffect(() => {
    // Initialize Web Vitals measurement
    import('web-vitals').then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
      const vitals: Partial<PerformanceMetrics> = {};

      getCLS((metric) => {
        vitals.cls = {
          name: 'CLS',
          value: metric.value,
          rating: metric.rating,
          threshold: { good: 0.1, poor: 0.25 }
        };
        updateMetrics(vitals);
      });

      getFCP((metric) => {
        vitals.fcp = {
          name: 'FCP',
          value: metric.value,
          rating: metric.rating,
          threshold: { good: 1800, poor: 3000 }
        };
        updateMetrics(vitals);
      });

      getFID((metric) => {
        vitals.fid = {
          name: 'FID',
          value: metric.value,
          rating: metric.rating,
          threshold: { good: 100, poor: 300 }
        };
        updateMetrics(vitals);
      });

      getLCP((metric) => {
        vitals.lcp = {
          name: 'LCP',
          value: metric.value,
          rating: metric.rating,
          threshold: { good: 2500, poor: 4000 }
        };
        updateMetrics(vitals);
      });

      getTTFB((metric) => {
        vitals.ttfb = {
          name: 'TTFB',
          value: metric.value,
          rating: metric.rating,
          threshold: { good: 800, poor: 1800 }
        };
        updateMetrics(vitals);
      });
    }).catch(() => {
      // Fallback for when web-vitals is not available
      // Load uptime data
      import('@/lib/uptime').then(({ uptimeMonitor }) => {
        setUptime({
          '24h': uptimeMonitor.getUptime('24h'),
          '7d': uptimeMonitor.getUptime('7d'), 
          '30d': uptimeMonitor.getUptime('30d'),
          avgResponse: uptimeMonitor.getAverageResponseTime('24h'),
        });
      });

      setIsLoading(false);
    });
  }, []);

  const updateMetrics = (vitals: Partial<PerformanceMetrics>) => {
    if (vitals.lcp && vitals.fid && vitals.cls && vitals.fcp && vitals.ttfb) {
      setMetrics(vitals as PerformanceMetrics);
      setIsLoading(false);
    }
  };

  const formatValue = (vital: WebVital): string => {
    if (vital.name === 'CLS') {
      return vital.value.toFixed(3);
    }
    return `${Math.round(vital.value)}ms`;
  };

  const getRatingColor = (rating: string): string => {
    switch (rating) {
      case 'good': return 'text-green-600 bg-green-50';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-50';
      case 'poor': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'good':
        return (
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'needs-improvement':
        return (
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'poor':
        return (
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getOverallScore = (): number => {
    if (!metrics) return 0;
    
    const scores = Object.values(metrics).map(vital => {
      switch (vital.rating) {
        case 'good': return 100;
        case 'needs-improvement': return 50;
        case 'poor': return 0;
        default: return 0;
      }
    });
    
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a29a88]"></div>
          <span className="ml-3 text-gray-600">Measuring Core Web Vitals...</span>
        </div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center text-gray-600">
          <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p>Performance metrics not available</p>
        </div>
      </div>
    );
  }

  const overallScore = getOverallScore();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header with Overall Score */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Core Web Vitals</h3>
            <p className="text-gray-600 text-sm">Live Performance Monitoring</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#a29a88] mb-1">{overallScore}</div>
            <div className="text-sm text-gray-600">Performance Score</div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(metrics).map(([key, vital]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {getRatingIcon(vital.rating)}
                  <h4 className="font-semibold text-gray-900">{vital.name}</h4>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(vital.rating)}`}>
                  {vital.rating.replace('-', ' ')}
                </span>
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {formatValue(vital)}
              </div>
              
              <div className="text-sm text-gray-600">
                {vital.name === 'LCP' && 'Largest Contentful Paint'}
                {vital.name === 'FID' && 'First Input Delay'}
                {vital.name === 'CLS' && 'Cumulative Layout Shift'}
                {vital.name === 'FCP' && 'First Contentful Paint'}
                {vital.name === 'TTFB' && 'Time to First Byte'}
              </div>

              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      vital.rating === 'good' ? 'bg-green-500' :
                      vital.rating === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ 
                      width: `${Math.min(100, (vital.threshold.poor - vital.value) / vital.threshold.poor * 100)}%` 
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>{vital.name === 'CLS' ? vital.threshold.poor.toFixed(2) : `${vital.threshold.poor}ms`}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Tips */}
        <div className="mt-8 p-6 bg-[#a29a88]/5 rounded-xl border border-[#a29a88]/20">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
            </svg>
            Performance Insights
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-700">
                <strong>Excellent performance!</strong> Your Core Web Vitals are optimized for the best user experience.
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                These metrics are measured in real-time and reflect actual user experience on this device.
              </p>
            </div>
          </div>
        </div>

        {/* Timestamp */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Last measured: {new Date().toLocaleString('de-DE')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;