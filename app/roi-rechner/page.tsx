"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import Magnet from '@/components/Magnet';
import ElegantShapes from '@/components/ElegantShapes';
import CustomCursor from '@/components/CustomCursor';
import ROICalculator from '@/components/ROICalculator';

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
            <Magnet innerClassName="hover:text-white">
              <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 rounded-full text-sm font-semibold hover:text-white hover:shadow-lg transition-all duration-300 group" style={{display: 'inline-block'}}>
                <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                  Kostenlose Analyse
                </span>
              </a>
            </Magnet>
          </div>
        </div>
      </nav>

      <ElegantShapes />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ROI-Rechner: <br />
              <span className="text-gray-300">Was bringt Ihnen eine neue Website?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Berechnen Sie in Echtzeit das Potenzial Ihrer Website-Optimierung. <br />
              Realistische Zahlen basierend auf 200+ erfolgreichen Projekten.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Basiert auf echten Daten
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Realistische Prognosen
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Performance-Garantie
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <ScrollAnimation animation="scaleIn" delay={0.3}>
            <ROICalculator />
          </ScrollAnimation>
        </div>
      </section>

      {/* Warum unser ROI-Rechner funktioniert */}
      <section className="py-16 md:py-24 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Warum unser ROI-Rechner <span className="text-[#a29a88]">realistisch</span> ist
              </h2>
              <p className="text-lg text-gray-600">
                Basierend auf echten Daten von 200+ erfolgreichen Website-Projekten
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Echte Daten */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Echte Daten</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle Berechnungen basieren auf durchschnittlichen Ergebnissen unserer letzten 200+ Website-Projekte.
                </p>
              </div>

              {/* Branchenspezifisch */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Branchenspezifisch</h3>
                <p className="text-gray-600 leading-relaxed">
                  Verschiedene Branchen haben unterschiedliche Potenziale. Unsere Algorithmen berücksichtigen das automatisch.
                </p>
              </div>

              {/* Performance-Garantie */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Garantiert</h3>
                <p className="text-gray-600 leading-relaxed">
                  Performance-Garantie oder Geld zurück. Wir stehen zu unseren Prognosen und garantieren messbare Ergebnisse.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Echte Erfolgsgeschichten
              </h2>
              <p className="text-lg text-gray-600">
                So haben unsere Kunden ihr ROI-Potenzial realisiert
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Anwaltskanzlei München</h3>
                  <p className="text-gray-600 text-sm">Familienrecht & Scheidung</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Traffic-Steigerung:</span>
                    <span className="font-bold text-black">+450%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Neue Leads/Monat:</span>
                    <span className="font-bold text-black">+67</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI nach 6 Monaten:</span>
                    <span className="font-bold text-black">+520%</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    "Von Seite 4 auf Platz 1 für 'Scheidung München'. Unglaublich!"
                  </p>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Online-Shop Hamburg</h3>
                  <p className="text-gray-600 text-sm">Elektronik & Zubehör</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Traffic-Steigerung:</span>
                    <span className="font-bold text-black">+280%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Conversion-Rate:</span>
                    <span className="font-bold text-black">+160%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI nach 4 Monaten:</span>
                    <span className="font-bold text-black">+390%</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    "Performance von 4s auf 0.8s - Umsatz verdreifacht!"
                  </p>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Zahnarztpraxis Berlin</h3>
                  <p className="text-gray-600 text-sm">Implantologie & Ästhetik</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lokale Sichtbarkeit:</span>
                    <span className="font-bold text-black">+340%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Terminbuchungen:</span>
                    <span className="font-bold text-black">+85/Monat</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI nach 3 Monaten:</span>
                    <span className="font-bold text-black">+440%</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    "Wartezimmer durchgehend voll. Beste Investition ever!"
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-8 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="slideUp" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Bereit für Ihr <span className="text-[#a29a88]">ROI-Wunder</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Verwandeln Sie Ihre Website-Träume in messbare Erfolge. <br />
              Kostenlose Analyse und unverbindliche Beratung in 24h.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6">
              <Magnet innerClassName="hover:text-white">
                <a
                  href="/kontakt"
                  className="bg-black text-[#a29a88] px-10 py-4 rounded-full text-lg font-bold hover:text-white hover:shadow-2xl transition-all duration-300 group"
                  style={{display: 'inline-block'}}
                >
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Website-Analyse
                  </span>
                </a>
              </Magnet>
              <Magnet>
                <a
                  href="/preise"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Pakete & Preise
                </a>
              </Magnet>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Performance-Garantie oder Geld zurück
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Antwort in 24 Stunden
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Nur 5 neue Kunden pro Monat
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Spark&Scale</div>
              <p className="text-gray-400 text-sm">
                Die KI-orientierte Webagentur für KMUs & Local Champions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/leistungen" className="hover:text-black transition-colors">Leistungen</a></li>
                <li><a href="/portfolio" className="hover:text-black transition-colors">Portfolio</a></li>
                <li><a href="/preise" className="hover:text-black transition-colors">Preise</a></li>
                <li><a href="/roi-rechner" className="hover:text-black transition-colors">ROI-Rechner</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/ueber-uns" className="hover:text-black transition-colors">Über uns</a></li>
                <li><a href="/kontakt" className="hover:text-black transition-colors">Kontakt</a></li>
                <li><a href="/blog" className="hover:text-black transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/impressum" className="hover:text-black transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-black transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="hover:text-black transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Spark&Scale GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}