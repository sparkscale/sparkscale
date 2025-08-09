"use client";

import { useEffect } from "react";
import type { Metric } from "web-vitals";
import { trackEvent } from "@/utils/analytics";

function report(metric: Metric) {
  // Send to GA4 using our analytics util
  trackEvent("web_vital", {
    name: metric.name,
    id: metric.id,
    value: metric.value,
    delta: (metric as any).delta ?? metric.value,
    rating: (metric as any).rating,
  });
}

export default function WebVitalsReporter() {
  useEffect(() => {
    let isMounted = true;
    // Dynamically import to avoid SSR issues
    import("web-vitals").then((webVitals) => {
      if (!isMounted) return;
      
      // Use available metrics (onFID was replaced by onINP in newer versions)
      if (webVitals.onCLS) webVitals.onCLS(report);
      if (webVitals.onFID) webVitals.onFID(report); // Legacy support
      if (webVitals.onINP) webVitals.onINP(report); // New metric
      if (webVitals.onLCP) webVitals.onLCP(report);
      if (webVitals.onFCP) webVitals.onFCP(report);
      if (webVitals.onTTFB) webVitals.onTTFB(report);
    }).catch((error) => {
      console.warn('Web Vitals could not be loaded:', error);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return null;
}