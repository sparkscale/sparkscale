import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// GSAP Configuration
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Animation defaults
gsap.defaults({
  duration: 0.6,
  ease: 'power2.out',
});

// Common animation utilities
export const animations = {
  fadeIn: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ...options }
    );
  },

  slideUp: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ...options }
    );
  },

  slideIn: (element: string | Element, direction: 'left' | 'right' = 'left', options?: gsap.TweenVars) => {
    const x = direction === 'left' ? -50 : 50;
    return gsap.fromTo(
      element,
      { x, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ...options }
    );
  },

  scaleIn: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ...options }
    );
  },

  stagger: (elements: string | Element[], animation: any, staggerTime: number = 0.1) => {
    return gsap.from(elements, {
      ...animation,
      stagger: staggerTime,
    });
  },
};

// Performance optimized animation settings
export const performanceSettings = {
  // Enable hardware acceleration
  force3D: true,
  // Reduce motion for accessibility
  reducedMotion: () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  },
};

export { gsap, ScrollTrigger }; 