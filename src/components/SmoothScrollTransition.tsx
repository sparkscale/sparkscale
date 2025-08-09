"use client";

import { useEffect } from 'react';

const SmoothScrollTransition = () => {
  useEffect(() => {
    // Add elegant CSS-based smooth transitions between sections
    const style = document.createElement('style');
    style.textContent = `
      section {
        position: relative;
        transition: all 0.6s ease-out;
      }
      
      /* NO default pseudo-elements - only specific transitions */

      /* White to Black transitions */
      section.bg-white + section.bg-black::before {
        background: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(0,0,0,0) 100%);
      }
      
      section.bg-black + section.bg-white::before {
        background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0) 100%);
      }

      /* White to Gray transitions */
      section.bg-white + section.bg-gray-100::before {
        background: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(243,244,246,0) 100%);
      }
      
      section.bg-gray-100 + section.bg-white::before {
        background: linear-gradient(to bottom, rgba(243,244,246,0.9) 0%, rgba(255,255,255,0) 100%);
      }

      /* Gray to Black transitions */
      section.bg-gray-100 + section.bg-black::before {
        background: linear-gradient(to bottom, rgba(243,244,246,0.9) 0%, rgba(0,0,0,0) 100%);
      }
      
      section.bg-black + section.bg-gray-100::before {
        background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(243,244,246,0) 100%);
      }

      /* Smooth scroll behavior */
      html {
        scroll-behavior: smooth;
      }

      /* Enhanced section shadows for depth */
      section.bg-white {
        box-shadow: 0 2px 20px rgba(0,0,0,0.05);
      }
      
      section.bg-black {
        box-shadow: 0 2px 40px rgba(0,0,0,0.3);
      }
      
      section.bg-gray-100 {
        box-shadow: 0 1px 15px rgba(0,0,0,0.03);
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default SmoothScrollTransition; 