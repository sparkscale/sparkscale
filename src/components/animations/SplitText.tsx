'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

interface SplitTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  delay = 0,
  duration = 0.6,
  className = '',
  stagger = 0.05,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.word');
    
    // Set initial state
    gsap.set(words, {
      y: 50,
      opacity: 0,
    });

    // Animate in
    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: 'power2.out',
    });
  }, [delay, duration, stagger]);

  // Split text into words and wrap each in a span
  const splitWords = text.split(' ').map((word, index) => (
    <span
      key={index}
      className="word inline-block"
      style={{ overflow: 'visible' }}
    >
      {word}
      {index < text.split(' ').length - 1 && '\u00A0'}
    </span>
  ));

  return (
    <div className={className} ref={containerRef}>
      {splitWords}
    </div>
  );
};

export default SplitText; 