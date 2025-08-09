"use client";

import { track } from '@vercel/analytics';

export const useVercelAnalytics = () => {
  const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
    track(eventName, properties);
    console.log('📊 Vercel Analytics Event:', eventName, properties);
  };

  const trackFormStart = () => {
    trackEvent('contact_form_started', {
      form_type: 'multi_step_contact',
      timestamp: new Date().toISOString(),
    });
  };

  const trackFormStep = (step: number, stepName: string) => {
    trackEvent('contact_form_step', {
      step_number: step,
      step_name: stepName,
      timestamp: new Date().toISOString(),
    });
  };

  const trackFormSubmission = (formData: any, leadScore: number) => {
    trackEvent('contact_form_submitted', {
      lead_score: leadScore,
      project_type: formData.projektArt?.join(', ') || '',
      budget_range: formData.budget || '',
      timeline: formData.timeline || '',
      form_source: typeof window !== 'undefined' ? window.location.pathname : '',
      timestamp: new Date().toISOString(),
    });
  };

  const trackFormSuccess = (customerId: string, leadScore: number) => {
    trackEvent('contact_form_success', {
      customer_id: customerId,
      lead_score: leadScore,
      is_fallback: customerId.startsWith('fallback_'),
      timestamp: new Date().toISOString(),
    });
  };

  return {
    trackEvent,
    trackFormStart,
    trackFormStep,
    trackFormSubmission,
    trackFormSuccess,
  };
};