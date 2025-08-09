"use client";

import React from 'react';
import MobileMenu from './MobileMenu';

const Navigation: React.FC = () => {
  return (
    <nav className="relative z-50 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/S&S (1)-Photoroom.png" 
              alt="Spark&Scale Logo" 
              className="logo-global"
            />
          </div>
          
          {/* Mobile Menu */}
          <MobileMenu />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="/leistungen" className="text-gray-600 hover:text-black transition-colors">Leistungen</a>
            <a href="/portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
            <a href="/preise" className="text-gray-600 hover:text-black transition-colors">Preise</a>
            <a href="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</a>
            <a href="/kontakt" className="text-gray-600 hover:text-black transition-colors">Kontakt</a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="/kontakt" 
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Kostenlose Analyse
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;