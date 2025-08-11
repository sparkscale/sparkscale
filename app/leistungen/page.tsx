"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
// Mobile-optimized: Magnet effects removed
import ElegantShapes from '@/components/ElegantShapes';
import CustomCursor from '@/components/CustomCursor';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      {/* Navigation - wird später durch globale Nav ersetzt */}
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
              <a href="/leistungen" className="text-black font-semibold">Leistungen</a>
              <a href="/portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
              <a href="/preise" className="text-gray-600 hover:text-black transition-colors">Preise</a>
              <a href="/roi-rechner" className="text-gray-600 hover:text-black transition-colors">ROI-Rechner</a>
              <a href="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</a>
              <a href="/kontakt" className="text-gray-600 hover:text-black transition-colors">Kontakt</a>
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
            
            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 bg-white relative overflow-hidden">
        <ElegantShapes />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                SEO & <span className="text-black">Performance Expertise</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spezialisiert auf Suchmaschinenoptimierung und technische Performance. 
                Von Local SEO bis Core Web Vitals – wir bringen Sie auf Seite 1.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 4 Hauptleistungen - Detailliert */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.2} triggerStart="top 95%">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Webdesign & Development */}
              <div className="group">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                  SEO-Optimierte Websites
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Websites die ranken: Von der technischen SEO-Optimierung bis zur Content-Strategie für maximale Sichtbarkeit. 
                  Moderne Entwicklung trifft auf bewährte SEO-Strategien.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">UI/UX Design (Mobile First)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Frontend-Development (React/Next.js)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">WordPress/Headless CMS Integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Performance-Optimierung (Core Web Vitals)</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-sm text-gray-500 mb-2">Durchschnittliche Verbesserung:</div>
                  <div className="text-2xl font-bold text-black">+340% Performance</div>
                </div>
              </div>

              {/* SEO & KI-Optimierung */}
              <div className="group">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                  KI-Search Optimierung
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Google SGE, Featured Snippets, Entity-SEO – optimiert für Googles KI-gestützte Suchergebnisse der Zukunft.
                  Semantische Markup und strukturierte Daten für maximale Sichtbarkeit.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Technisches SEO & Core Web Vitals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">KI-lesbare Inhalte & strukturierte Daten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Schema Markup Implementation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Local SEO & Google My Business</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-sm text-gray-500 mb-2">Erfolgsquote:</div>
                  <div className="text-2xl font-bold text-black">90% Seite 1 Ranking</div>
                </div>
              </div>

              {/* Performance & Hosting */}
              <div className="group">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                  Performance & Hosting
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Blitzschnelle Ladezeiten und professionelles Hosting mit 99.9% Uptime-Garantie. 
                  Wir optimieren jede Website für maximale Performance und Benutzerfreundlichkeit.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Server-Optimierung & Caching</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">CDN-Integration & SSL-Zertifikate</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">24/7 Monitoring & Wartung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Backup-Strategien & Recovery</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-sm text-gray-500 mb-2">Performance-Garantie:</div>
                  <div className="text-2xl font-bold text-black">&lt;2.5s Ladezeit</div>
                </div>
              </div>

              {/* Lokale Sichtbarkeit */}
              <div className="group">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                  Lokale Sichtbarkeit
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dominieren Sie Ihre lokale Konkurrenz mit strategischem Local SEO. Wir bringen Sie in lokalen 
                  Suchergebnissen nach vorne und steigern Ihre regionale Präsenz nachhaltig.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Google My Business Optimierung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Lokale Verzeichnisse & Citations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Regional SEO & Geo-Targeting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Review-Management & Reputation</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-sm text-gray-500 mb-2">Durchschnittliche Steigerung:</div>
                  <div className="text-2xl font-bold text-black">+450% lokale Anfragen</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Bereit für <span className="text-black">professionelle Leistungen</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, welche Leistungen für Ihr Unternehmen den größten Impact haben.
            </p>
          </ScrollAnimation>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div>
              <a 
                href="/preise"
                className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 rounded-full shadow-lg"
              >
                Pakete & Preise ansehen
              </a>
            </div>
              <div>
              <a 
                href="/kontakt"
                  className="bg-black text-[#a29a88] px-8 py-4 text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full shadow-lg group"
                style={{display: 'inline-block'}}
              >
                <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                  Kostenlose Analyse
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



