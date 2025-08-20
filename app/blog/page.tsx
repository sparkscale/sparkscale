"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/">
                <Image 
                  src="/S&S (1)-Photoroom.png" 
                  alt="Spark&Scale Logo" 
                  width={120}
                  height={60}
                  className="logo-global"
                />
              </a>
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="/" className="text-gray-800 hover:text-black transition-colors">Home</a>
              <a href="/leistungen" className="text-gray-800 hover:text-black transition-colors">Leistungen</a>

              <a href="/preise" className="text-gray-800 hover:text-black transition-colors">Preise</a>
              <a href="/roi-rechner" className="text-gray-800 hover:text-black transition-colors">ROI-Rechner</a>
              <a href="/blog" className="text-black font-semibold">Blog</a>
              <a href="/kontakt" className="text-gray-800 hover:text-black transition-colors">Kontakt</a>
            </div>
            <div className="hidden md:block">
              <div>
                <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md group" style={{display: 'inline-block'}}>
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Analyse
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="mb-12">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-8 bg-[#a29a88]/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Blog <span className="text-[#a29a88]">Coming Soon</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Wir arbeiten an wertvollen Inhalten zu Performance, SEO und modernen Web-Technologien. 
                Bleiben Sie gespannt auf praxiserprobte Strategien und echte Case Studies.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#a29a88]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Performance Guides</h3>
                <p className="text-gray-400 text-sm">Core Web Vitals, Lighthouse Optimierung und Speed-Hacks</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#a29a88]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">SEO Strategien</h3>
                <p className="text-gray-400 text-sm">KI-Search Optimierung, Featured Snippets und Ranking-Faktoren</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#a29a88]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Case Studies</h3>
                <p className="text-gray-400 text-sm">Echte Projekte mit messbaren Ergebnissen und Learnings</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.6}>
            <div className="text-center">
              <p className="text-gray-400 mb-6">
                Möchten Sie über neue Artikel informiert werden?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a 
                  href="/kontakt"
                  className="bg-[#a29a88] text-black px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all duration-300 shadow-lg"
                >
                  Benachrichtigung erhalten
                </a>
                <a 
                  href="/"
                  className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Zur Startseite
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}