"use client";

import React from 'react';
import { useBehavioralTriggers } from '@/hooks/useBehavioralTriggers';
import Magnet from '@/components/Magnet';

interface DynamicCTAProps {
  className?: string;
}

export default function DynamicCTA({ className = '' }: DynamicCTAProps) {
  const [currentCTA, setCurrentCTA] = React.useState<string | null>(null);
  
  const {
    timeOnPage,
    scrollDepth,
    isReturningVisitor,
    showExitIntent,
    showTimeBasedCTA,
    showScrollBasedCTA,
    resetExitIntent,
    resetTimeBasedCTA,
    resetScrollBasedCTA,
    dismissExitIntent,
    dismissTimeBasedCTA,
    dismissScrollBasedCTA,
  } = useBehavioralTriggers({
    onExitIntent: () => {
      console.log('Exit intent detected');
      setCurrentCTA('exit-intent');
    },
    onTimeThreshold: (time) => {
      console.log(`Time threshold reached: ${time}s`);
      // For returning visitors, show different CTA
      if (isReturningVisitor) {
        setCurrentCTA('returning-visitor');
      } else {
        setCurrentCTA('time-based');
      }
    },
    onScrollThreshold: (depth) => {
      console.log(`Scroll threshold reached: ${depth}%`);
      setCurrentCTA('scroll-based');
    },
  });

  const handleCTAClose = () => {
    if (currentCTA === 'exit-intent') {
      dismissExitIntent();
    } else if (currentCTA === 'time-based' || currentCTA === 'returning-visitor') {
      dismissTimeBasedCTA();
    } else if (currentCTA === 'scroll-based') {
      dismissScrollBasedCTA();
    }
    setCurrentCTA(null);
  };

  const handleCTAClick = () => {
    // Track conversion
    console.log(`CTA clicked: ${currentCTA}`);
    handleCTAClose();
  };

  // Exit Intent Modal
  if (showExitIntent && currentCTA === 'exit-intent') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center relative">
          <button 
            onClick={handleCTAClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="mb-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-black mb-2">Warten Sie!</h3>
            <p className="text-gray-600">
              Kostenlose Website-Analyse gefällig? 
              <br />Lassen Sie uns Ihre Seite optimieren.
            </p>
          </div>
          
          <div className="space-y-3">
            <Magnet padding={20} disabled={false} magnetStrength={6}>
              <button 
                onClick={() => {
                  console.log(`CTA clicked: ${currentCTA}`);
                  window.location.href = '/kontakt';
                }}
                className="w-full bg-[#a29a88] text-white py-3 px-6 rounded-full font-semibold hover:brightness-110 transition-all duration-300"
              >
                Kostenlose Website-Analyse
              </button>
            </Magnet>
            
            <button 
              onClick={handleCTAClose}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Nein danke, vielleicht später
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Returning Visitor CTA - DEAKTIVIERT
  // if (showTimeBasedCTA && currentCTA === 'returning-visitor') {
  //   return (
  //     <div className="fixed bottom-20 right-6 z-40 max-w-sm">
  //       <div className="bg-gray-800 text-white rounded-xl shadow-lg p-4 border border-gray-600">
  //         <button 
  //           onClick={handleCTAClose}
  //           className="absolute -top-2 -right-2 bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-100"
  //         >
  //           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  //           </svg>
  //         </button>
  //         
  //         <div className="mb-3">
  //           <div className="flex items-center gap-2 mb-2">
  //             <div className="text-lg">👋</div>
  //             <h4 className="font-semibold text-white text-sm">Willkommen zurück!</h4>
  //           </div>
  //           <p className="text-xs text-gray-300">
  //             Noch Fragen zu Ihrem Website-Projekt? 
  //             Starten Sie jetzt einen Live-Chat mit unserem Team!
  //           </p>
  //         </div>
  //         
  //         <Magnet padding={15} disabled={false} magnetStrength={4}>
  //           <button 
  //             onClick={handleCTAClick}
  //             className="w-full bg-white text-gray-800 py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
  //           >
  //             Live-Chat starten
  //           </button>
  //         </Magnet>
  //       </div>
  //     </div>
  //   );
  // }

  // Time-based Floating CTA - DEAKTIVIERT
  // if (showTimeBasedCTA && currentCTA === 'time-based') {
  //   return (
  //     <div className="fixed bottom-20 right-6 z-40 max-w-sm">
  //       <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
  //         <button 
  //           onClick={handleCTAClose}
  //           className="absolute -top-2 -right-2 bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
  //         >
  //           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  //           </svg>
  //         </button>
  //         
  //         <div className="mb-3">
  //           <div className="flex items-center gap-2 mb-2">
  //             <div className="text-lg">🚀</div>
  //             <h4 className="font-semibold text-black text-sm">Bereit für den nächsten Schritt?</h4>
  //           </div>
  //           <p className="text-xs text-gray-600">
  //             Sie lesen bereits {Math.floor(timeOnPage / 60)} Minute{timeOnPage >= 120 ? 'n' : ''}. 
  //             Lassen Sie uns Ihre Website analysieren!
  //           </p>
  //         </div>
  //         
  //         <Magnet padding={15} disabled={false} magnetStrength={4}>
  //           <button 
  //             onClick={handleCTAClick}
  //             className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300"
  //           >
  //             Kostenlose Analyse starten
  //           </button>
  //         </Magnet>
  //       </div>
  //     </div>
  //   );
  // }

  // Scroll-based Banner - DEAKTIVIERT
  // if (showScrollBasedCTA && currentCTA === 'scroll-based') {
  //   return (
  //     <div className="fixed top-20 left-0 right-0 z-40">
  //       <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 px-4">
  //         <div className="container mx-auto max-w-6xl flex items-center justify-between">
  //           <div className="flex items-center gap-3">
  //             <div className="text-lg">💡</div>
  //             <div>
  //               <span className="font-semibold text-sm">
  //                 Interessiert? Sie haben bereits {scrollDepth}% der Seite gelesen!
  //               </span>
  //               <span className="text-xs text-yellow-100 ml-2">
  //                 → Jetzt kostenlosen Website-Check sichern
  //               </span>
  //             </div>
  //           </div>
  //           
  //           <div className="flex items-center gap-3">
  //             <Magnet padding={10} disabled={false} magnetStrength={3}>
  //               <button 
  //                 onClick={() => {
  //                   console.log(`CTA clicked: ${currentCTA}`);
  //                   window.location.href = '/kontakt';
  //                 }}
  //                 className="bg-white text-yellow-600 py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
  //               >
  //                 Website analysieren
  //               </button>
  //             </Magnet>
  //             
  //             <button 
  //               onClick={handleCTAClose}
  //               className="text-yellow-100 hover:text-white transition-colors"
  //             >
  //               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  //               </svg>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // Debug info (only in development)
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`fixed bottom-4 left-4 bg-black text-white text-xs p-2 rounded ${className}`}>
        <div>Time: {timeOnPage}s</div>
        <div>Scroll: {scrollDepth}%</div>
        <div>Returning: {isReturningVisitor ? 'Yes' : 'No'}</div>
        <div>Current CTA: {currentCTA || 'None'}</div>
      </div>
    );
  }

  return null;
} 