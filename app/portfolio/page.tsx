"use client";

import { useState, useEffect } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import MobilePortfolio from '@/components/MobilePortfolio';
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

export default function PortfolioPage() {
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
                Ausgewählte <span className="text-[#a29a88]">Projekte</span>
              </h1>
              <p className="text-xl text-[#a29a88] max-w-3xl mx-auto">
                Echte Ergebnisse unserer Kunden. Von lokalen Dienstleistern bis hin zu 
                skalierenden E-Commerce Shops – diese Erfolgsgeschichten sprechen für sich.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mobile Portfolio */}
      <MobilePortfolio />

      {/* Case Study Categories - Desktop Only */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white hidden md:block">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15} triggerStart="top 95%">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
              
              {/* Lokale Dienstleister */}
              <div>
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Lokale Dienstleister
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Regional verwurzelt</h2>
                  <p className="text-gray-600 text-base md:text-lg">Lokale Marktführerschaft durch strategisches SEO und gezielte Optimierung</p>
                </div>

                <div className="space-y-8">
                  {/* Anwaltskanzlei Case */}
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer group border border-gray-100 hover:border-gray-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">Rechtsanwaltskanzlei Schmidt</h3>
                          <p className="text-gray-500">Familienrecht, München</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-black">+450%</div>
                        <div className="text-sm text-gray-500">lokale Anfragen</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Die Herausforderung:</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Die Kanzlei war bei lokalen Suchanfragen praktisch unsichtbar. Trotz 15 Jahren Erfahrung 
                        rankte sie auf Seite 2-3 für wichtige Keywords wie "Fachanwalt Familienrecht München".
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Unsere Lösung:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Local SEO Optimierung</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />  
                          </svg>
                          <span className="text-sm text-gray-600">Mobile-First Design</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Core Web Vitals</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Content-Strategie</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="text-sm text-gray-500 mb-2">Ergebnis nach 4 Monaten:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-black">Top 3</div>
                          <div className="text-xs text-gray-500">Rankings</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">8 → 44</div>
                          <div className="text-xs text-gray-500">Mandatsanfragen/Monat</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">280%</div>
                          <div className="text-xs text-gray-500">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zahnarztpraxis Case */}
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer group border border-gray-100 hover:border-gray-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">Zahnarztpraxis Dr. Weber</h3>
                          <p className="text-gray-500">Implantologie, Hamburg</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-black">Seite 1</div>
                        <div className="text-sm text-gray-500">von Seite 4</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Die Herausforderung:</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Spezialisiert auf Implantologie, aber bei "Zahnimplantate Hamburg" auf Seite 4. 
                        Online-Terminbuchungen waren praktisch nicht vorhanden.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Unsere Lösung:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Fachspezifisches SEO</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Online-Terminbuchung</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Analytics Setup</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Conversion-Optimierung</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="text-sm text-gray-500 mb-2">Ergebnis nach 5 Monaten:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-black">Platz 2</div>
                          <div className="text-xs text-gray-500">Hauptkeyword</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">+280%</div>
                          <div className="text-xs text-gray-500">Online-Termine</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">4.8/5</div>
                          <div className="text-xs text-gray-500">Google Bewertung</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KMU/Skalierung & E-Commerce */}
              <div>
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Skalierung & E-Commerce
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Wachstum beschleunigen</h2>
                  <p className="text-gray-600 text-base md:text-lg">Performance und Conversion-Optimierung für skalierende Unternehmen</p>
                </div>

                <div className="space-y-8">
                  {/* B2B SaaS Case */}
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer group border border-gray-100 hover:border-gray-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">HR-Tech Platform</h3>
                          <p className="text-gray-500">B2B SaaS, Berlin</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-black">+280%</div>
                        <div className="text-sm text-gray-500">organic Traffic</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Die Herausforderung:</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Starkes Produkt, aber schwache Online-Präsenz. Organic Traffic stagnierte bei 5.000 Besuchern/Monat. 
                        Konkurrenz dominierte alle relevanten B2B-Keywords.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Unsere Lösung:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Technical SEO Audit</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Content Hub Strategy</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">SaaS-optimierte Landingpages</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Lead-Scoring Integration</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="text-sm text-gray-500 mb-2">Ergebnis nach 6 Monaten:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-black">20.000</div>
                          <div className="text-xs text-gray-500">Besucher/Monat</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">+40%</div>
                          <div className="text-xs text-gray-500">Testaccounts</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">8.5x</div>
                          <div className="text-xs text-gray-500">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* E-Commerce Case */}
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer group border border-gray-100 hover:border-gray-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">Fashion E-Commerce</h3>
                          <p className="text-gray-500">Online-Shop, Deutschland</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-black">+160%</div>
                        <div className="text-sm text-gray-500">Conversion Rate</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Die Herausforderung:</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Hoher Traffic, aber niedrige Conversion-Rate von 0.8%. Checkout-Abbruchrate bei 78%. 
                        Mobile Performance katastrophal mit 2.1s Ladezeit auf dem Smartphone.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Unsere Lösung:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Checkout-Optimierung</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Mobile Performance</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Lokale Landingpages</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">A/B-Testing Setup</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="text-sm text-gray-500 mb-2">Ergebnis nach 4 Monaten:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-black">2.1%</div>
                          <div className="text-xs text-gray-500">Conversion Rate</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">+340%</div>
                          <div className="text-xs text-gray-500">Store-Besuche</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-black">890ms</div>
                          <div className="text-xs text-gray-500">Mobile Ladezeit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Social Media & Performance Marketing in Aktion */}
          <ScrollAnimation animation="slideUp" delay={0.4}>
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[#a29a88] text-black px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Marketing & Social Media
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Echte Ergebnisse <span className="text-gray-600">statt leere Likes</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Wir zeigen nur Zahlen, die wirklich zählen: mehr Kunden, mehr Umsatz.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Zahnarztpraxis Case */}
                <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer group border border-gray-100 hover:border-gray-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#a29a88] rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">📈 Zahnarztpraxis Dr. Weber, Hamburg</h3>
                        <p className="text-gray-500">Von 0 auf 2.400 Follower in 4 Monaten</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-black">+280%</div>
                      <div className="text-sm text-gray-500">Online-Terminbuchungen</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="text-sm text-gray-500 mb-2">ROI: Investition nach 3 Monaten zurück</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-black">2.400</div>
                        <div className="text-xs text-gray-500">Instagram-Follower</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-black">+280%</div>
                        <div className="text-xs text-gray-500">Online-Termine</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-black">3 Monate</div>
                        <div className="text-xs text-gray-500">ROI-Zeit</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* E-Commerce Fashion Case */}
                <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer group border border-gray-100 hover:border-gray-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#a29a88] rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">🛍️ Fashion E-Commerce „GreenStyle"</h3>
                        <p className="text-gray-500">Facebook Ads ROI: 5,8× (aus 1 € wurden 5,80 €)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-black">+340%</div>
                      <div className="text-sm text-gray-500">Online-Umsatz</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="text-sm text-gray-500 mb-2">Bonus: Content-Shooting inklusive – keine Extra-Kosten</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-black">5,8×</div>
                        <div className="text-xs text-gray-500">Facebook Ads ROI</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-black">+340%</div>
                        <div className="text-xs text-gray-500">Online-Umsatz</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-black">Inklusive</div>
                        <div className="text-xs text-gray-500">Content-Shooting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="text-center mt-12">
                <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 italic mb-4">
                    💬 „Endlich ein Partner, der versteht: Marketing muss sich rechnen."
                  </p>
                  <p className="text-sm text-gray-500 font-semibold">– Sarah M., Unternehmerin</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* CTA für Portfolio */}
          <ScrollAnimation animation="scaleIn" delay={0.6}>
            <div className="text-center bg-gray-100 rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Ähnliche Ergebnisse für Ihr Unternehmen?</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Lassen Sie uns analysieren, welches Potenzial in Ihrer Website steckt. 
                Jedes Unternehmen ist einzigartig – und unsere Strategie auch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div>
                  <a href="/kontakt" className="bg-black text-[#a29a88] px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 rounded-full shadow-lg group" style={{display: 'inline-block'}}>
                    <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                      Kostenlose Erstanalyse
                    </span>
                  </a>
                </div>
                <div>
                  <a 
                    href="/preise"
                    className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-full"
                  >
                    Pakete ansehen
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}



