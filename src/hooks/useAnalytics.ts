import { useEffect, useCallback } from 'react';
import { 
  trackEvent, 
  trackCTA, 
  trackContactClick, 
  initScrollTracking, 
  initTimeTracking,
  setUserProperties 
} from '@/utils/analytics';

// Custom Hook für Analytics Integration
export const useAnalytics = () => {
  // Initialize page tracking on mount
  useEffect(() => {
    // Set up scroll and time tracking
    const cleanupScroll = initScrollTracking();
    const cleanupTime = initTimeTracking();
    
    // Set user properties (device, browser, etc.)
    const userAgent = navigator.userAgent;
    const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent);
    const browser = getBrowserName(userAgent);
    
    setUserProperties({
      device_type: isMobile ? 'mobile' : 'desktop',
      browser_name: browser,
      page_load_time: performance.now(),
      user_language: navigator.language,
    });

    return () => {
      cleanupScroll?.();
      cleanupTime?.();
    };
  }, []);

  // Track CTA clicks
  const trackCTAClick = useCallback((ctaText: string, location: string, destination?: string) => {
    trackCTA(ctaText, location, destination || window.location.href);
  }, []);

  // Track contact method clicks
  const trackContact = useCallback((method: 'phone' | 'email' | 'whatsapp', value: string) => {
    trackContactClick(method, value);
  }, []);

  // Track custom events
  const track = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    trackEvent(eventName, parameters);
  }, []);

  return {
    trackCTAClick,
    trackContact,
    track,
  };
};

// Utility function to detect browser
function getBrowserName(userAgent: string): string {
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  return 'Other';
}

// Hook specifically for contact forms
export const useContactFormAnalytics = () => {
  const trackFormStep = useCallback((step: number, formData: any = {}) => {
    // Import here to avoid circular dependency
    import('@/utils/analytics').then(({ trackContactFormStep }) => {
      trackContactFormStep(step, formData);
    });
  }, []);

  const trackFormAbandonment = useCallback((step: number, timeSpent: number) => {
    trackEvent('contact_form_abandonment', {
      abandoned_step: step,
      time_spent_seconds: timeSpent,
      event_category: 'Contact Form',
      event_label: `Abandoned_Step_${step}`,
    });
  }, []);

  return {
    trackFormStep,
    trackFormAbandonment,
  };
};

// Hook for ROI Calculator analytics
export const useROICalculatorAnalytics = () => {
  const trackCalculatorStart = useCallback(() => {
    import('@/utils/analytics').then(({ trackROICalculator }) => {
      trackROICalculator('start');
    });
  }, []);

  const trackCalculatorComplete = useCallback((data: any) => {
    import('@/utils/analytics').then(({ trackROICalculator }) => {
      trackROICalculator('complete', data);
    });
  }, []);

  const trackCalculatorStep = useCallback((step: string, value: any) => {
    trackEvent('roi_calculator_step', {
      calculator_step: step,
      step_value: value,
      event_category: 'ROI Calculator',
      event_label: step,
    });
  }, []);

  return {
    trackCalculatorStart,
    trackCalculatorComplete,
    trackCalculatorStep,
  };
};

// Hook for enhanced ecommerce tracking
export const useEcommerceAnalytics = () => {
  const trackPurchaseIntent = useCallback((value: number, projectType: string) => {
    trackEvent('purchase_intent', {
      currency: 'EUR',
      value: value,
      project_type: projectType,
      event_category: 'Ecommerce',
      event_label: 'Purchase Intent',
    });
  }, []);

  const trackAddToCart = useCallback((itemName: string, price: number) => {
    trackEvent('add_to_cart', {
      currency: 'EUR',
      value: price,
      items: [{
        item_name: itemName,
        price: price,
        quantity: 1,
      }],
      event_category: 'Ecommerce',
      event_label: itemName,
    });
  }, []);

  return {
    trackPurchaseIntent,
    trackAddToCart,
  };
};

export default useAnalytics;