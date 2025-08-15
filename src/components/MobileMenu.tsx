"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/preise', label: 'Preise' },
    { href: '/roi-rechner', label: 'ROI-Rechner' },
    { href: '/blog', label: 'Blog' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      {/* Hamburger Button - Fixed Position - Only when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden fixed top-4 left-4 p-3 rounded-full transition-all duration-300 z-[60] bg-gray-900/80 text-white hover:bg-gray-900 shadow-sm backdrop-blur-sm"
          aria-label="Menü öffnen"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="block w-5 h-0.5 bg-current -translate-y-1.5" />
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current translate-y-1.5" />
          </div>
        </button>
      )}

      {/* Mobile Menu Overlay - Vertical Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Vertical Menu Panel - Left Side */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              {/* Header mit Logo/Branding */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Spark&Scale</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Items - Vertical */}
              <div className="flex-1 py-4 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center px-6 py-4 text-lg font-medium text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 hover:border-r-4 hover:border-yellow-600 transition-all duration-200 group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
                
              
              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;