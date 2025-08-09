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
    import("web-vitals").then(({ onCLS, onFID, onLCP, onFCP, onTTFB }) => {
      if (!isMounted) return;
      onCLS(report);
      onFID(report);
      onLCP(report);
      onFCP(report);
      onTTFB(report);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return null;
}