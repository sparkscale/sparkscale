"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
// Mobile-optimized: Magnet effects removed
import ElegantShapes from '@/components/ElegantShapes';
import CustomCursor from '@/components/CustomCursor';
import ROICalculator from '@/components/ROICalculator';
import Footer from '@/components/Footer';

export default function ROIRechnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/">
                <img 
                  src="/S&S (1)-Photoroom.png" 
                  alt="Spark&Scale Logo" 
                  className="logo-global"
                />
              </a>
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="/" className="text-gray-600 hover:text-black transition-colors">Home</a>
              <a href="/leistungen" className="text-gray-600 hover:text-black transition-colors">Leistungen</a>
              <a href="/portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
              <a href="/preise" className="text-gray-600 hover:text-black transition-colors">Preise</a>
              <a href="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</a>
              <a href="/kontakt" className="text-gray-600 hover:text-black transition-colors">Kontakt</a>
            </div>
            <div innerClassName="hover:text-white">
              <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 rounded-full text-sm font-semibold hover:text-white hover:shadow-lg transition-all duration-300 group" style={{display: 'inline-block'}}>
                <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                  Kostenlose Analyse
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <ElegantShapes />

      {/* ROI Calculator - Clean Full Page */}
      <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="text-center mb-16 px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              ROI-Rechner
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Berechnen Sie das Potenzial Ihrer Website mit unserer <span className="text-[#a29a88] font-semibold">Performance-Garantie</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Performance-Garantie oder Geld zurück
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                90% unserer Kunden erreichen Seite 1
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Antwort in 24 Stunden
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="slideUp" delay={0.4}>
          <ROICalculator />
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}

