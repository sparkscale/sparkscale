'use client';

import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '@/lib/gsap';
import { performanceSettings } from '@/lib/gsap';

interface UseGSAPOptions {
  dependencies?: any[];
  scope?: RefObject<HTMLElement>;
}

export const useGSAP = (
  callback: (gsap: typeof gsap) => void,
  options: UseGSAPOptions = {}
) => {
  const { dependencies = [], scope } = options;

  useEffect(() => {
    // Check for reduced motion
    if (performanceSettings.reducedMotion()) {
      return;
    }

    // Set scope if provided
    if (scope?.current) {
      const context = gsap.context(() => {
        callback(gsap);
      }, scope.current);

      return () => {
        context.revert();
      };
    } else {
      callback(gsap);
    }
  }, dependencies);
};

// Hook for scroll-triggered animations
export const useScrollTrigger = (
  callback: (context: { gsap: typeof gsap; ScrollTrigger: any }) => void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    if (performanceSettings.reducedMotion()) {
      return;
    }

    // Dynamic import to avoid SSR issues
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);
      callback({ gsap, ScrollTrigger });
    });

    return () => {
      // Clean up ScrollTriggers
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, dependencies);
};

// Hook for intersection observer animations
export const useInViewAnimation = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return elementRef;
}; 