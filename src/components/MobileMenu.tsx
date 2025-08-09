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
            
            {/* Menu Panel - Cleaner & Übersichtlicher */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50 md:hidden"
            >
              {/* Simple Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="text-xl font-bold text-black">Menü</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-black"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Clean Menu Items */}
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
                
              {/* Simple CTA */}
              <div className="p-4 border-t border-gray-200">
                <motion.a
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="block w-full bg-black text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Kostenlose Analyse
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;