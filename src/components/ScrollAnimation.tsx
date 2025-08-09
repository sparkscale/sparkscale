"use client";

import { useRef } from 'react';
import { useScrollTrigger } from '@/hooks/useGSAP';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'staggerUp';
  delay?: number;
  duration?: number;
  triggerStart?: string;
  className?: string;
  stagger?: number;
}

const ScrollAnimation = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  triggerStart = 'top 80%',
  className = '',
  stagger = 0.1,
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(({ gsap, ScrollTrigger }) => {
    const element = elementRef.current;
    if (!element) return;

    // Animation configurations
    const animations = {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1, duration, delay }
      },
      slideUp: {
        from: { y: 60, opacity: 0 },
        to: { y: 0, opacity: 1, duration, delay, ease: 'power3.out' }
      },
      slideLeft: {
        from: { x: 60, opacity: 0 },
        to: { x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
      },
      slideRight: {
        from: { x: -60, opacity: 0 },
        to: { x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
      },
      scaleIn: {
        from: { scale: 0.8, opacity: 0 },
        to: { scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' }
      },
      staggerUp: {
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1, duration, delay, ease: 'power3.out', stagger }
      }
    };

    const config = animations[animation];

    // Handle stagger animations (multiple children)
    if (animation === 'staggerUp') {
      const children = element.children;
      if (children.length > 0) {
        gsap.fromTo(Array.from(children), config.from, {
          ...config.to,
          scrollTrigger: {
            trigger: element,
            start: triggerStart,
            toggleActions: 'play none none reverse',
          }
        });
      }
    } else {
      // Handle single element animations
      gsap.fromTo(element, config.from, {
        ...config.to,
        scrollTrigger: {
          trigger: element,
          start: triggerStart,
          toggleActions: 'play none none reverse',
        }
      });
    }
  }, [animation, delay, duration, triggerStart, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 