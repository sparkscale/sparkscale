"use client";

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Function to get brightness of background color
    const getBrightness = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 128; // Default to medium brightness
      const r = parseInt(rgb[0]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2]);
      return (r * 299 + g * 587 + b * 114) / 1000;
    };

    const updateCursorColor = (x: number, y: number) => {
      // Check if cursor is in header area (first 100px from top)
      if (y <= 100) {
        cursor.classList.remove('cursor-light');
        return;
      }
      
      // Get all elements at position (ignores transparent header)
      const elements = document.elementsFromPoint(x, y);
      
      // Check for white modals/popups (Exit-Intent, etc.)
      for (let element of elements) {
        // Check for any white background elements in fixed positioned containers
        if (element.classList.contains('bg-white') || 
            (element.closest('.bg-white') && element.closest('[class*="fixed"]'))) {
          cursor.classList.remove('cursor-light');
          return;
        }
        
        // Check for modal overlay structures (DynamicCTA Exit-Intent)
        if (element.closest('[class*="fixed"][class*="inset-0"][class*="bg-black"]') && 
            element.closest('.bg-white')) {
          cursor.classList.remove('cursor-light');
          return;
        }
        
        // Check for floating CTAs with white backgrounds
        if (element.classList.contains('bg-white') && 
            (element.closest('[class*="fixed"][class*="bottom"]') ||
             element.closest('[class*="fixed"][class*="top"]'))) {
          cursor.classList.remove('cursor-light');
          return;
        }
      }
      
      for (let element of elements) {
        // Skip cursor and header/nav elements
        if (element.classList.contains('custom-cursor') || 
            element.tagName.toLowerCase() === 'nav' ||
            element.closest('nav')) continue;
        
        const style = window.getComputedStyle(element);
        const bgColor = style.backgroundColor;
        
        // Check for gradient backgrounds (common in dark sections)
        const bgImage = style.backgroundImage;
        const hasGradient = bgImage && bgImage.includes('gradient') && 
                           (bgImage.includes('black') || bgImage.includes('gray-900') || bgImage.includes('rgb(0') || bgImage.includes('rgb(17'));
        
        // Check for actual background (not transparent)
        if ((bgColor && 
            bgColor !== 'rgba(0, 0, 0, 0)' && 
            bgColor !== 'transparent' &&
            !bgColor.includes('rgba(0, 0, 0, 0)')) || hasGradient) {
          
          const brightness = getBrightness(bgColor);
          // More sensitive detection for dark backgrounds
          if (brightness < 120 || hasGradient || 
              element.classList.contains('bg-black') || 
              element.classList.contains('bg-gray-900') ||
              element.closest('.bg-black, .bg-gray-900, [class*="from-gray-900"], [class*="to-black"]')) {
            cursor.classList.add('cursor-light');
            return;
          } else {
            cursor.classList.remove('cursor-light');
            return;
          }
        }
      }
      
      // Default: dark cursor
      cursor.classList.remove('cursor-light');
    };

    // Store current mouse position
    let currentMouseX = 0;
    let currentMouseY = 0;

    const updateCursorState = (x: number, y: number) => {
      requestAnimationFrame(() => {
        cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        
        // Update cursor color based on position
        updateCursorColor(x, y);
        
        // Update cursor hover/CTA state
        const elementUnderCursor = document.elementFromPoint(x, y);
        if (elementUnderCursor) {
          const isCTA = elementUnderCursor.matches('button, .cta-button, [data-cta], [data-cta] *') ||
                       elementUnderCursor.closest('[data-cta]');
          const isInteractive = elementUnderCursor.matches('a, button, [role="button"], .cursor-hover-target, [data-cta], [data-cta] *') ||
                                elementUnderCursor.closest('a, button, [role="button"], .cursor-hover-target, [data-cta]');
          
          // Remove all states first
          cursor.classList.remove('cursor-hover', 'cursor-cta');
          
          // Add appropriate state
          if (isCTA) {
            cursor.classList.add('cursor-cta');
          } else if (isInteractive) {
            cursor.classList.add('cursor-hover');
          }
        } else {
          cursor.classList.remove('cursor-hover', 'cursor-cta');
        }
      });
    };

    const moveCursor = (e: MouseEvent) => {
      currentMouseX = e.clientX;
      currentMouseY = e.clientY;
      updateCursorState(currentMouseX, currentMouseY);
    };

    const handleScroll = () => {
      // Update cursor state on scroll using current mouse position
      updateCursorState(currentMouseX, currentMouseY);
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('scroll', handleScroll, true); // Use capture to catch all scroll events

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor; 