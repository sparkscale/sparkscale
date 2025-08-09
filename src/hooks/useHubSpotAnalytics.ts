"use client";

import { useEffect } from 'react';

// HubSpot Analytics Events
export const useHubSpotAnalytics = () => {
  useEffect(() => {
    console.log('HubSpot Analytics initialized');
  }, []);

  const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
    if (typeof window !== 'undefined') {
      window.hsq = window.hsq || [];
      window.hsq.push(['track', eventName, properties]);
      console.log('HubSpot Event:', eventName, properties);
    }
  };

  const identifyUser = (email: string, properties: Record<string, any> = {}) => {
    if (typeof window !== 'undefined') {
      window.hsq = window.hsq || [];
      window.hsq.push(['identify', { email, ...properties }]);
      console.log('HubSpot User Identified:', email, properties);
    }
  };

  return {
    trackEvent,
    identifyUser,
  };
};

export const useContactFormAnalytics = () => {
  const { trackEvent, identifyUser } = useHubSpotAnalytics();

  const trackFormStart = () => {
    trackEvent('contact_form_started', {
      form_type: 'multi_step_contact',
    });
  };

  const trackFormStep = (step: number, stepName: string) => {
    trackEvent('contact_form_step_completed', {
      step_number: step,
      step_name: stepName,
    });
  };

  const trackFormSubmission = (formData: any, leadScore: number) => {
    identifyUser(formData.email, {
      firstname: formData.name.split(' ')[0],
      lastname: formData.name.split(' ').slice(1).join(' '),
      phone: formData.phone,
      company: formData.unternehmen,
    });

    trackEvent('contact_form_submitted', {
      lead_score: leadScore,
      project_type: formData.projektArt.join(', '),
      budget_range: formData.budget,
      timeline: formData.timeline,
    });
  };

  return {
    trackFormStart,
    trackFormStep,
    trackFormSubmission,
  };
};

declare global {
  interface Window {
    hsq: any[];
  }
}