"use client";

import { useState, useEffect, useRef } from 'react';

interface BehavioralState {
  timeOnPage: number;
  scrollDepth: number;
  isReturningVisitor: boolean;
  showExitIntent: boolean;
  showTimeBasedCTA: boolean;
  showScrollBasedCTA: boolean;
  dismissedExitIntent: boolean;
  dismissedTimeBasedCTA: boolean;
  dismissedScrollBasedCTA: boolean;
}

interface BehavioralTriggers {
  onExitIntent?: () => void;
  onTimeThreshold?: (time: number) => void;
  onScrollThreshold?: (depth: number) => void;
}

export function useBehavioralTriggers(triggers: BehavioralTriggers = {}) {
  const [state, setState] = useState<BehavioralState>({
    timeOnPage: 0,
    scrollDepth: 0,
    isReturningVisitor: false,
    showExitIntent: false,
    showTimeBasedCTA: false,
    showScrollBasedCTA: false,
    dismissedExitIntent: false,
    dismissedTimeBasedCTA: false,
    dismissedScrollBasedCTA: false,
  });
  
  const timeStartRef = useRef<number>(Date.now());
  const hasTriggeredExitIntentRef = useRef<boolean>(false);
  const hasTriggeredTimeBasedRef = useRef<boolean>(false);
  const hasTriggeredScrollBasedRef = useRef<boolean>(false);

  // Check if returning visitor
  useEffect(() => {
    const hasVisited = localStorage.getItem('spark-scale-visited');
    const isReturning = !!hasVisited;
    
    if (!hasVisited) {
      localStorage.setItem('spark-scale-visited', 'true');
    }
    
    setState(prev => ({ ...prev, isReturningVisitor: isReturning }));
  }, []);

  // Time on page tracking
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Math.floor((Date.now() - timeStartRef.current) / 1000);
      setState(prev => ({ ...prev, timeOnPage: currentTime }));
      
      // Trigger at 2 minutes (120 seconds)
      if (currentTime > 120 && !hasTriggeredTimeBasedRef.current) {
        hasTriggeredTimeBasedRef.current = true;
        setState(prev => ({ 
          ...prev, 
          showTimeBasedCTA: !prev.dismissedTimeBasedCTA 
        }));
        if (!state.dismissedTimeBasedCTA) {
          triggers.onTimeThreshold?.(currentTime);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [triggers]);

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      setState(prev => ({ ...prev, scrollDepth: scrollPercent }));
      
      // Trigger at 50% scroll depth
      if (scrollPercent > 50 && !hasTriggeredScrollBasedRef.current) {
        hasTriggeredScrollBasedRef.current = true;
        setState(prev => ({ 
          ...prev, 
          showScrollBasedCTA: !prev.dismissedScrollBasedCTA 
        }));
        if (!state.dismissedScrollBasedCTA) {
          triggers.onScrollThreshold?.(scrollPercent);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggers]);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggeredExitIntentRef.current && !state.dismissedExitIntent) {
        hasTriggeredExitIntentRef.current = true;
        setState(prev => ({ ...prev, showExitIntent: true }));
        triggers.onExitIntent?.();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [triggers]);

  const resetExitIntent = () => {
    setState(prev => ({ ...prev, showExitIntent: false }));
    hasTriggeredExitIntentRef.current = false;
  };

  const resetTimeBasedCTA = () => {
    setState(prev => ({ ...prev, showTimeBasedCTA: false }));
    hasTriggeredTimeBasedRef.current = false;
  };

  const resetScrollBasedCTA = () => {
    setState(prev => ({ ...prev, showScrollBasedCTA: false }));
    hasTriggeredScrollBasedRef.current = false;
  };

  const dismissExitIntent = () => {
    setState(prev => ({ ...prev, showExitIntent: false, dismissedExitIntent: true }));
  };

  const dismissTimeBasedCTA = () => {
    setState(prev => ({ ...prev, showTimeBasedCTA: false, dismissedTimeBasedCTA: true }));
  };

  const dismissScrollBasedCTA = () => {
    setState(prev => ({ ...prev, showScrollBasedCTA: false, dismissedScrollBasedCTA: true }));
  };

  return {
    ...state,
    resetExitIntent,
    resetTimeBasedCTA,
    resetScrollBasedCTA,
    dismissExitIntent,
    dismissTimeBasedCTA,
    dismissScrollBasedCTA,
  };
} 