"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/leistungen', label: 'Leistungen', icon: '⚡' },
    { href: '/portfolio', label: 'Portfolio', icon: '🎯' },
    { href: '/preise', label: 'Preise', icon: '💰' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/kontakt', label: 'Kontakt', icon: '📞' },
  ];

  return (
    <>
      {/* Hamburger Button - Verbessert */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden p-3 rounded-full transition-all duration-300 z-50 relative ${
          isOpen 
            ? 'bg-black text-white shadow-lg' 
            : 'bg-gray-100 text-black hover:bg-gray-200 shadow-sm'
        }`}
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'
          }`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'
          }`} />
        </div>
      </button>

      {/* Mobile Menu Overlay - Komplett überarbeitet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop mit Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel - Vollbild mit modernem Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
              className="fixed inset-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl z-50 md:hidden border border-gray-200"
            >
              {/* Header mit Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img 
                    src="/S&S (1)-Photoroom.png" 
                    alt="Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="font-bold text-lg">Spark&Scale</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items mit Icons */}
              <div className="flex flex-col p-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#a29a88] group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800 group-hover:text-black">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
                
              {/* CTA Button - Verbessert */}
              <div className="p-6 pt-0">
                <motion.a
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="block w-full bg-gradient-to-r from-black to-gray-800 text-white text-center py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  🚀 Kostenlose Website-Analyse
                </motion.a>
              </div>

              {/* Footer Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center text-sm text-gray-500 bg-gray-50 rounded-xl p-3">
                  <div className="font-medium text-gray-700">Bereit für mehr Erfolg?</div>
                  <div>Seite 1 in 6 Monaten garantiert</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;