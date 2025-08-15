"use client";

import { useState, useEffect } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
// Mobile-optimized: Magnet effects removed

import CustomCursor from '@/components/CustomCursor';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { 
  IconHome, 
  IconBriefcase, 
  IconPhoto, 
  IconCurrencyDollar, 
  IconCalculator, 
  IconNews, 
  IconMail 
} from '@tabler/icons-react';

export default function LeistungenPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY) {
        setIsScrolled(true); // Scrolling down
      } else {
        setIsScrolled(false); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "Leistungen",
      link: "/leistungen",
      icon: <IconBriefcase className="h-4 w-4" />,
    },
    {
      name: "Portfolio", 
      link: "/portfolio",
      icon: <IconPhoto className="h-4 w-4" />,
    },
    {
      name: "Preise",
      link: "/preise", 
      icon: <IconCurrencyDollar className="h-4 w-4" />,
    },
    {
      name: "ROI-Rechner",
      link: "/roi-rechner",
      icon: <IconCalculator className="h-4 w-4" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <IconNews className="h-4 w-4" />,
    },
    {
      name: "Kontakt",
      link: "/kontakt",
      icon: <IconMail className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      {/* Mobile Menu */}
      <MobileMenu />
      
      {/* Floating Navigation - Desktop */}
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#a29a88]">
                SEO & <span className="text-[#a29a88]">Performance Expertise</span>
              </h1>
              <p className="text-xl text-[#a29a88] max-w-3xl mx-auto">
                Spezialisiert auf Suchmaschinenoptimierung und technische Performance. 
                Von Local SEO bis Core Web Vitals – wir bringen Sie auf Seite 1.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 4-Schritte-Prozess */}
      <section className="py-16 md:py-24 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unser bewährter <span className="text-gray-300">4-Schritte-Prozess</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Von der Analyse bis zur Performance-Garantie - so funktioniert Ihr Erfolg
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.2}>
            <div className="grid md:grid-cols-4 gap-8">
              {/* Schritt 1: Analyse */}
              <div className="relative">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tiefgehende Analyse</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Wir analysieren Ihre aktuelle Website, Konkurrenz und Zielgruppe. 
                    Core Web Vitals, SEO-Status und Conversion-Potenzial.
                  </p>
                  <div className="text-sm text-gray-700 font-semibold">
                    ✓ Website-Audit<br />
                    ✓ Competitor-Analyse<br />
                    ✓ Keyword-Research
                  </div>
                </div>
                {/* Verbindungslinie */}
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#a29a88] z-0"></div>
              </div>

              {/* Schritt 2: Strategie */}
              <div className="relative">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Maßgeschneiderte Strategie</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Basierend auf den Analyseergebnissen entwickeln wir eine 
                    individuelle Strategie für maximale Performance und ROI.
                  </p>
                  <div className="text-sm text-gray-700 font-semibold">
                    ✓ Performance-Plan<br />
                    ✓ SEO-Roadmap<br />
                    ✓ Conversion-Strategie
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#a29a88] z-0"></div>
              </div>

              {/* Schritt 3: Umsetzung */}
              <div className="relative">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professionelle Umsetzung</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Mit modernster Technologie (Next.js, GSAP, WebGL) setzen wir 
                    Ihre Performance-Website um - schnell und fehlerfrei.
                  </p>
                  <div className="text-sm text-gray-800 font-semibold">
                    ✓ Development<br />
                    ✓ Performance-Optimierung<br />
                    ✓ Testing & QA
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#a29a88] z-0"></div>
              </div>

              {/* Schritt 4: Garantie */}
              <div className="relative">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance-Garantie</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Wir garantieren messbare Ergebnisse: Core Web Vitals, 
                    Rankings und Conversions - oder Sie bekommen Ihr Geld zurück.
                  </p>
                <div className="text-sm text-[#a29a88] font-semibold">
                    ✓ Live-Monitoring<br />
                    ✓ Monatliche Reports<br />
                    ✓ Geld-zurück-Garantie
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Full-Stack Digital Partner */}
      <section className="py-20 px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Schluss mit Agentur-Chaos – <span className="text-[#a29a88]">ein Partner für alles</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  <strong className="text-white">Das Problem:</strong> Website bei Agentur A. Social Media bei Freelancer B. Ads bei Dienstleister C.<br/>
                  <strong className="text-red-400">Ergebnis:</strong> Zeitverlust, doppelte Kosten, Strategien, die sich widersprechen.
                </p>
                <p className="text-xl text-[#a29a88] font-semibold mb-4">
                  Unsere Lösung: Ein Team. Eine Strategie. Messbare Ergebnisse.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Der Vorteil: Jede Maßnahme zahlt auf Ihre Website-Performance ein – ohne Reibungsverluste, ohne Kommunikationsfehler.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              
              {/* Website & SEO */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Website & SEO</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sichtbar werden, Vertrauen aufbauen
                </p>
              </div>

              {/* Social Media Management */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Social Media Management</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Instagram, Facebook & TikTok professionell betreut
                </p>
              </div>

              {/* Performance Ads */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Performance Ads</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Kampagnen, die Gewinn bringen statt Geld verbrennen
                </p>
              </div>

              {/* Content Creation */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Content Creation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Eigene Fotos & Videos, perfekt auf Ihre Marke abgestimmt
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.5}>
            <div className="text-center bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-2xl font-bold text-[#a29a88]">📊 Ergebnis</h3>
              </div>
              <p className="text-xl text-white font-semibold mb-6">
                Bis zu 3× mehr qualifizierte Anfragen in 90 Tagen – oder Ihr Geld zurück.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/preise" className="bg-[#a29a88] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300">
                  Marketing-Pakete ansehen
                </a>
                <a href="/kontakt" className="border-2 border-[#a29a88] text-[#a29a88] px-8 py-3 rounded-full font-semibold hover:bg-[#a29a88] hover:text-black transition-all duration-300">
                  Kostenlose Analyse
                </a>
              </div>
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



