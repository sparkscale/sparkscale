"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('spark-scale-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences and initialize analytics if consented
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
      initializeAnalytics(savedPreferences);
    }
  }, []);

  // Provide a global re-open helper
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).openCookieSettings = () => {
        setShowDetails(true);
        setIsVisible(true);
      };
    }
  }, []);

  const initializeAnalytics = (prefs: CookiePreferences) => {
    if (prefs.analytics && typeof window !== 'undefined') {
      // Initialize Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': prefs.marketing ? 'granted' : 'denied',
        });
      }
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    savePreferences(newPreferences);
    initializeAnalytics(newPreferences);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    savePreferences(preferences);
    initializeAnalytics(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    savePreferences(newPreferences);
    setIsVisible(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('spark-scale-cookie-consent', JSON.stringify(prefs));
    
    // Set consent mode for Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
      });
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-4xl w-full pointer-events-auto"
        >
          <div className="p-6 md:p-8">
            {!showDetails ? (
              // Simple Banner
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#a29a88] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Wir respektieren Ihre Privatsphäre
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu optimieren. 
                      Sie können Ihre Einstellungen jederzeit anpassen oder alle Cookies akzeptieren.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-[#a29a88] font-semibold hover:underline text-sm"
                  >
                    Cookie-Einstellungen anpassen
                  </button>
                  
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      Nur notwendige
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2 bg-[#a29a88] text-white rounded-full hover:brightness-110 transition-all text-sm font-medium"
                    >
                      Alle akzeptieren
                    </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-6 py-2 bg-white text-[#a29a88] border border-[#a29a88]/40 rounded-full hover:bg-[#a29a88]/10 transition-all text-sm font-medium"
                  >
                    Einstellungen
                  </button>
                  </div>
                </div>
              </div>
            ) : (
              // Detailed Settings
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Cookie-Einstellungen
                  </h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6 mb-8">
                  {/* Necessary Cookies */}
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Notwendige Cookies</h4>
                        <div className="w-12 h-6 bg-[#a29a88] rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Analyse-Cookies</h4>
                        <button
                          onClick={() => handlePreferenceChange('analytics')}
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            preferences.analytics ? 'bg-[#a29a88]' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                            preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                          }`}></div>
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">
                        Helfen uns zu verstehen, wie Besucher mit der Website interagieren. Alle Daten sind anonymisiert.
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Marketing-Cookies</h4>
                        <button
                          onClick={() => handlePreferenceChange('marketing')}
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            preferences.marketing ? 'bg-[#a29a88]' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                            preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                          }`}></div>
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">
                        Werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Alle ablehnen
                  </button>
                  <button
                    onClick={handleAcceptSelected}
                    className="px-6 py-2 bg-[#a29a88] text-white rounded-full hover:brightness-110 transition-all text-sm font-medium"
                  >
                    Auswahl speichern
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Weitere Informationen finden Sie in unserer{' '}
                    <a href="/datenschutz" className="text-[#a29a88] hover:underline">
                      Datenschutzerklärung
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookieBanner;