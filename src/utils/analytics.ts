// Google Analytics 4 & Conversion Tracking Utilities
// für Spark&Scale Website Analytics

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// GA4 Event Types
export interface GAEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// Conversion Events für Spark&Scale
export const CONVERSION_EVENTS = {
  // Contact Form Events
  CONTACT_FORM_START: 'contact_form_start',
  CONTACT_FORM_STEP_2: 'contact_form_step_2', 
  CONTACT_FORM_STEP_3: 'contact_form_step_3',
  CONTACT_FORM_COMPLETE: 'contact_form_complete',
  
  // ROI Calculator Events
  ROI_CALCULATOR_START: 'roi_calculator_start',
  ROI_CALCULATOR_COMPLETE: 'roi_calculator_complete',
  
  // CTA Events
  CTA_CLICK: 'cta_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  
  // Page Engagement
  SCROLL_90: 'scroll_90_percent',
  TIME_ON_PAGE_60: 'time_on_page_60s',
  
  // Downloads & Resources
  DOWNLOAD_CASE_STUDY: 'download_case_study',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  
  // Business Goals
  LEAD_QUALIFIED: 'lead_qualified',
  QUOTE_REQUEST: 'quote_request',
} as const;

// Track GA4 Event
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
    });
    
    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('GA4 Event Tracked:', eventName, parameters);
    }
  }
};

// Contact Form Tracking
export const trackContactFormStep = (step: number, formData: any = {}) => {
  const eventName = step === 1 ? CONVERSION_EVENTS.CONTACT_FORM_START :
                   step === 2 ? CONVERSION_EVENTS.CONTACT_FORM_STEP_2 :
                   step === 3 ? CONVERSION_EVENTS.CONTACT_FORM_STEP_3 :
                   CONVERSION_EVENTS.CONTACT_FORM_COMPLETE;

  trackEvent(eventName, {
    form_step: step,
    project_type: formData.projektArt?.join(', ') || '',
    budget_range: formData.budget || '',
    timeline: formData.timeline || '',
    lead_score: formData.leadScore || 0,
    event_category: 'Contact Form',
    event_label: `Step ${step}`,
  });
};

// ROI Calculator Tracking
export const trackROICalculator = (action: 'start' | 'complete', data: any = {}) => {
  const eventName = action === 'start' ? 
    CONVERSION_EVENTS.ROI_CALCULATOR_START : 
    CONVERSION_EVENTS.ROI_CALCULATOR_COMPLETE;

  trackEvent(eventName, {
    monthly_visitors: data.monthlyVisitors || 0,
    conversion_rate: data.conversionRate || 0,
    order_value: data.orderValue || 0,
    estimated_roi: data.estimatedROI || 0,
    event_category: 'ROI Calculator',
    event_label: action,
    value: data.estimatedROI || 0,
  });
};

// CTA Click Tracking
export const trackCTA = (ctaText: string, location: string, destination: string) => {
  trackEvent(CONVERSION_EVENTS.CTA_CLICK, {
    cta_text: ctaText,
    cta_location: location, // 'hero', 'footer', 'sidebar', etc.
    cta_destination: destination,
    event_category: 'CTA',
    event_label: ctaText,
  });
};

// Phone/Email/WhatsApp Click Tracking
export const trackContactClick = (method: 'phone' | 'email' | 'whatsapp', value: string) => {
  const eventName = method === 'phone' ? CONVERSION_EVENTS.PHONE_CLICK :
                   method === 'email' ? CONVERSION_EVENTS.EMAIL_CLICK :
                   CONVERSION_EVENTS.WHATSAPP_CLICK;

  trackEvent(eventName, {
    contact_method: method,
    contact_value: value,
    event_category: 'Contact',
    event_label: method,
  });
};

// Page Engagement Tracking
export const trackPageEngagement = (engagementType: 'scroll' | 'time', value: number) => {
  const eventName = engagementType === 'scroll' ? CONVERSION_EVENTS.SCROLL_90 : CONVERSION_EVENTS.TIME_ON_PAGE_60;
  
  trackEvent(eventName, {
    engagement_type: engagementType,
    engagement_value: value,
    page_url: window.location.pathname,
    event_category: 'Engagement',
    event_label: `${engagementType}_${value}`,
  });
};

// Newsletter Signup Tracking
export const trackNewsletterSignup = (email: string, source: string) => {
  trackEvent(CONVERSION_EVENTS.NEWSLETTER_SIGNUP, {
    email_domain: email.split('@')[1] || '',
    signup_source: source, // 'blog', 'footer', 'popup', etc.
    event_category: 'Newsletter',
    event_label: source,
  });
};

// Lead Qualification Tracking (for HubSpot integration)
export const trackLeadQualification = (leadScore: number, leadData: any) => {
  trackEvent(CONVERSION_EVENTS.LEAD_QUALIFIED, {
    lead_score: leadScore,
    budget_range: leadData.budget || '',
    project_type: leadData.projektArt?.join(', ') || '',
    company_size: leadData.companySize || '',
    timeline: leadData.timeline || '',
    event_category: 'Lead Generation',
    event_label: `Score_${leadScore}`,
    value: leadScore,
  });
};

// Enhanced Ecommerce - Quote Request (treated as purchase intent)
export const trackQuoteRequest = (projectValue: number, projectDetails: any) => {
  trackEvent(CONVERSION_EVENTS.QUOTE_REQUEST, {
    currency: 'EUR',
    value: projectValue,
    project_type: projectDetails.type || '',
    project_scope: projectDetails.scope || '',
    event_category: 'Quote Request',
    event_label: projectDetails.type,
  });
};

// Scroll Tracking (call this from useEffect)
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let scrollTracked = false;
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent >= 90 && !scrollTracked) {
      trackPageEngagement('scroll', 90);
      scrollTracked = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Time on Page Tracking
export const initTimeTracking = () => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  let timeTracked = false;

  const checkTime = () => {
    const timeOnPage = (Date.now() - startTime) / 1000;
    
    if (timeOnPage >= 60 && !timeTracked) {
      trackPageEngagement('time', 60);
      timeTracked = true;
    }
  };

  const interval = setInterval(checkTime, 10000); // Check every 10s
  
  return () => clearInterval(interval);
};

// Custom Dimensions für erweiterte Segmentierung
export const setCustomDimensions = (dimensions: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      custom_map: dimensions
    });
  }
};

// User Properties für Personalisierung
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
};