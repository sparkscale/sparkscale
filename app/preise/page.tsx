"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import ConditionalMagnet from '@/components/ConditionalMagnet';
import ElegantShapes from '@/components/ElegantShapes';
import CustomCursor from '@/components/CustomCursor';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';

import ShinyText from '@/components/ShinyText';

export default function PreisePage() {
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
              <a href="/preise" className="text-black font-semibold">Preise</a>
              <a href="/roi-rechner" className="text-gray-600 hover:text-black transition-colors">ROI-Rechner</a>
              <a href="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</a>
              <a href="/kontakt" className="text-gray-600 hover:text-black transition-colors">Kontakt</a>
            </div>
            <div className="hidden md:block">
              <ConditionalMagnet padding={20} disabled={false} magnetStrength={4} innerClassName="hover:text-white">
                <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md group" style={{display: 'inline-block'}}>
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Analyse
                  </span>
                </a>
              </ConditionalMagnet>
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
                Unsere <span className="text-black">Pakete</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent, fair und ergebnisorientiert. Wählen Sie das Paket, das am besten zu 
                Ihren Zielen und Ihrem Budget passt. Alle Pakete mit Performance-Garantie.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pakete Grid */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15} triggerStart="top 95%">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              
              {/* Starter Paket */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Schneller Einstieg
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Starter-Paket</h3>
                  <div className="text-4xl font-light text-black mb-2">2.500€</div>
                  <p className="text-gray-500 text-sm">Einmaliger Festpreis</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-black mb-4">Perfekt für:</h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Kleine Unternehmen & Startups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Erste professionelle Website</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Budget bis 3.000€</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Landing Page + 3 Unterseiten</span>
                      <div className="text-xs text-gray-500 mt-1">Responsive Design, optimiert für alle Geräte</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Basic SEO Setup</span>
                      <div className="text-xs text-gray-500 mt-1">Meta-Tags, strukturierte Daten, Sitemap</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Performance-Optimierung</span>
                      <div className="text-xs text-gray-500 mt-1">Core Web Vitals, Lighthouse Score &gt;90</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">3 Monate Support</span>
                      <div className="text-xs text-gray-500 mt-1">Updates, Bugfixes, kleine Änderungen</div>
                    </div>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">Projektdauer:</div>
                    <div className="text-sm font-semibold text-black">2-3 Wochen</div>
                  </div>
                </div>

                <ConditionalMagnet padding={30} disabled={false} magnetStrength={6}>
                  <button className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
                    Sofort starten
                  </button>
                </ConditionalMagnet>
              </div>

              {/* Pro Paket - Featured */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative border-2 border-black transform lg:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold">
                    BELIEBT
                  </div>
                </div>

                <div className="text-center mb-8 pt-2">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Vollständige Lösung
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    <ShinyText text="Pro-Paket" className="text-2xl font-bold" />
                  </h3>
                  <div className="text-4xl font-light text-black mb-2">
                    <ShinyText text="5.500€" className="text-4xl font-light" />
                  </div>
                  <p className="text-gray-500 text-sm">Einmaliger Festpreis</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-black mb-4">Perfekt für:</h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Etablierte KMUs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Lokale Marktführerschaft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Ernsthafte Online-Präsenz</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Website (bis 10 Seiten)</span>
                      <div className="text-xs text-gray-500 mt-1">Individuelle Gestaltung, CMS-Integration</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">KI-Optimierung + Schema Markup</span>
                      <div className="text-xs text-gray-500 mt-1">Zukunftssicher für ChatGPT, Bard & Co</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Local SEO + Google My Business</span>
                      <div className="text-xs text-gray-500 mt-1">Lokale Sichtbarkeit, Review-Management</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Performance-Garantie</span>
                      <div className="text-xs text-gray-500 mt-1">Core Web Vitals oder Geld zurück</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">6 Monate Premium Support</span>
                      <div className="text-xs text-gray-500 mt-1">Priorität-Support, monatliche Reports</div>
                    </div>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <div className="text-xs text-gray-500 mb-2">Projektdauer:</div>
                    <div className="text-sm font-semibold text-black">4-6 Wochen</div>
                  </div>
                </div>

                <ConditionalMagnet padding={30} disabled={false} magnetStrength={6}>
                  <button className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg">
                    Beratung buchen
                  </button>
                </ConditionalMagnet>
              </div>

              {/* Enterprise Paket */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Marktführer werden
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
                  <div className="text-4xl font-light text-black mb-2">ab 9.500€</div>
                  <p className="text-gray-500 text-sm">Individuell angepasst</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-black mb-4">Perfekt für:</h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Große Unternehmen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">E-Commerce Shops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Komplexe Anforderungen</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Custom Development</span>
                      <div className="text-xs text-gray-500 mt-1">Maßgeschneiderte Lösungen, API-Integrationen</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">E-Commerce Integration</span>
                      <div className="text-xs text-gray-500 mt-1">Shopify, WooCommerce, custom Solutions</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">Umfassendes SEO + KI-Strategy</span>
                      <div className="text-xs text-gray-500 mt-1">Enterprise SEO, Content-Strategie</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">12 Monate Full-Service Support</span>
                      <div className="text-xs text-gray-500 mt-1">Dedizierter Account Manager, SLA</div>
                    </div>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">Projektdauer:</div>
                    <div className="text-sm font-semibold text-black">8-12 Wochen</div>
                  </div>
                </div>

                <ConditionalMagnet padding={30} disabled={false} magnetStrength={6}>
                  <button className="w-full border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                    Strategiegespräch
                  </button>
                </ConditionalMagnet>
              </div>
            </div>
          </ScrollAnimation>

          {/* ROI-Garantie Section */}
          <ScrollAnimation animation="scaleIn" delay={0.6}>
            <div className="text-center bg-gray-100 border border-gray-300 rounded-2xl p-12 max-w-5xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">Performance-Garantie & ROI</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">100%</div>
                  <div className="text-sm text-gray-700">Geld-zurück bei nicht erreichten Core Web Vitals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">6 Monate</div>
                  <div className="text-sm text-gray-700">Durchschnittliche Amortisation der Investition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">90%</div>
                  <div className="text-sm text-gray-700">Unserer Kunden erreichen Seite 1 Rankings</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Durchschnittlich amortisiert sich jede Investition in 6 Monaten durch mehr Leads, bessere Rankings 
                und höhere Conversion-Raten. Wir stehen zu unseren Versprechen.
              </p>
              
              <ConditionalMagnet padding={30} disabled={false} magnetStrength={6}>
                <a href="/roi-rechner" className="bg-black text-white px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-all duration-300 rounded-full shadow-lg inline-block">
                  📊 Kostenlosen ROI-Rechner nutzen
                </a>
              </ConditionalMagnet>
            </div>
          </ScrollAnimation>



          {/* FAQ Section */}
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <div className="max-w-4xl mx-auto mt-20">
              <h3 className="text-2xl font-bold text-center text-black mb-12">Häufige Fragen</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">Warum Festpreise?</h4>
                  <p className="text-gray-600 text-sm">
                    Transparenz und Planbarkeit für Sie. Keine versteckten Kosten, keine bösen Überraschungen. 
                    Sie wissen von Anfang an, was Sie investieren.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">Was ist bei den Paketen enthalten?</h4>
                  <p className="text-gray-600 text-sm">
                    Alles was Sie für eine professionelle Website brauchen: Design, Entwicklung, SEO-Setup, 
                    Performance-Optimierung und Support. Hosting können wir optional übernehmen.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">Wie funktioniert die Performance-Garantie?</h4>
                  <p className="text-gray-600 text-sm">
                    Erreichen wir nicht die versprochenen Core Web Vitals Werte, erhalten Sie Ihr Geld zurück. 
                    So einfach ist das. Wir sind von unserer Qualität überzeugt.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">Kann ich später upgraden?</h4>
                  <p className="text-gray-600 text-sm">
                    Selbstverständlich! Sie können jederzeit auf ein höheres Paket upgraden. 
                    Bereits investierte Beträge werden angerechnet.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Bereit für <span className="text-black">professionelle Ergebnisse</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Strategiegespräch herausfinden, 
              welches Paket perfekt zu Ihren Zielen passt.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.1} stagger={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <ConditionalMagnet padding={30} disabled={false} magnetStrength={6} innerClassName="hover:text-white">
                <button className="bg-black text-[#a29a88] px-8 py-4 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full shadow-lg group" style={{display: 'inline-block'}}>
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Website-Analyse
                  </span>
                </button>
              </ConditionalMagnet>
              <ConditionalMagnet padding={30} disabled={false} magnetStrength={6}>
                <button className="border-2 border-black text-black px-12 py-4 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-full">
                  Strategiegespräch buchen
                </button>
              </ConditionalMagnet>
            </div>
          </ScrollAnimation>

          {/* Trust Badges */}
          <ScrollAnimation animation="staggerUp" delay={0.2} stagger={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">30-Tage Geld-zurück-Garantie</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium">100% DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium">Performance-Garantie</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
