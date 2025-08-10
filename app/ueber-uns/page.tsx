"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import ConditionalConditionalMagnet from '@/components/ConditionalConditionalMagnet';
import ElegantShapes from '@/components/ElegantShapes';
import CustomCursor from '@/components/CustomCursor';
import CountUp from '@/components/CountUp';
import Footer from '@/components/Footer';

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="block">
                <img 
                  src="/S&S (1)-Photoroom.png" 
                  alt="Spark&Scale Logo" 
                  className="logo-global"
                />
              </a>
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="/leistungen" className="text-gray-600 hover:text-black transition-colors">Leistungen</a>
              <a href="/portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
              <a href="/preise" className="text-gray-600 hover:text-black transition-colors">Preise</a>
              <a href="/roi-rechner" className="text-gray-600 hover:text-black transition-colors">ROI-Rechner</a>
              <a href="/ueber-uns" className="text-gray-600 hover:text-black transition-colors font-semibold">Über uns</a>
              <a href="/kontakt" className="text-gray-600 hover:text-black transition-colors">Kontakt</a>
            </div>
            <ConditionalMagnet innerClassName="hover:text-white">
              <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 rounded-full text-sm font-semibold hover:text-white hover:shadow-lg transition-all duration-300 group" style={{display: 'inline-block'}}>
                <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                  Kostenlose Analyse
                </span>
              </a>
            </ConditionalMagnet>
          </div>
        </div>
      </nav>

      <ElegantShapes />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Die <span className="text-gray-300">KI-orientierte</span> <br />
              Webagentur für KMUs
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Performance-Garantie oder Geld zurück. Wir machen Ihre Website zur Leadmaschine <br />
              und sorgen für messbare Erfolge in der digitalen Welt.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Performance-Garantie
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                90% Seite 1 Erfolg
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                200+ erfolgreiche Projekte
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Werte */}
      <section className="py-16 md:py-24 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unsere <span className="text-gray-300">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Wir verwandeln durchschnittliche Websites in hochperformante Leadmaschinen. 
                Mit modernster Technologie, KI-Optimierung und einer einzigartigen Performance-Garantie 
                helfen wir KMUs dabei, online zu dominieren und ihre Konkurrenz zu überholen.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Transparenz */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">100% Transparenz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Keine versteckten Kosten, keine leeren Versprechen. Sie sehen jeden Schritt 
                  unserer Arbeit und erhalten regelmäßige, messbare Reports.
                </p>
              </div>

              {/* Performance */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Core Web Vitals, Lighthouse Scores, Conversion-Rates - wir optimieren für 
                  messbare Ergebnisse, nicht für schöne Designs ohne Funktion.
                </p>
              </div>

              {/* Zukunftssicherheit */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">KI-Ready für 2025+</h3>
                <p className="text-gray-600 leading-relaxed">
                  Während andere für Google optimieren, bereiten wir Sie auf ChatGPT, 
                  Bard und die Zukunft der KI-Suche vor.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Erfolg in Zahlen */}
      <section className="py-16 md:py-24 px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Erfolg in <span className="text-gray-300">Zahlen</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Messbare Ergebnisse sprechen für sich
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-4 gap-8">
              {/* Projekte */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                  <CountUp to={200} duration={2} />+
                </div>
                <p className="text-gray-300">Erfolgreiche Projekte</p>
              </div>

              {/* Core Web Vitals */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                  <CountUp to={3800} duration={2.5} />+
                </div>
                <p className="text-gray-300">Core Web Vital Fixes</p>
              </div>

              {/* Seite 1 Rankings */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                  <CountUp to={90} duration={2} />%
                </div>
                <p className="text-gray-300">Seite 1 Rankings</p>
              </div>

              {/* Kundenzufriedenheit */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                  <CountUp to={4.9} duration={2} />/5
                </div>
                <p className="text-gray-300">Durchschnittsbewertung</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Unser 4-Schritte-Prozess */}
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

      {/* Tech-Stack */}
      <section className="py-16 md:py-24 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Modernste <span className="text-gray-300">Technologie</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wir setzen auf die neuesten und leistungsstärksten Web-Technologien
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {/* Next.js */}
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">▲</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Next.js 14</h4>
                <p className="text-xs text-gray-600 mt-1">React Framework</p>
              </div>

              {/* TypeScript */}
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">TypeScript</h4>
                <p className="text-xs text-gray-600 mt-1">Type Safety</p>
              </div>

              {/* GSAP */}
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xs">GSAP</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">GSAP</h4>
                <p className="text-xs text-gray-600 mt-1">Animationen</p>
              </div>

              {/* Tailwind */}
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xs">TW</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Tailwind CSS</h4>
                <p className="text-xs text-gray-600 mt-1">Styling</p>
              </div>

              {/* WebGL */}
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xs">WebGL</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">WebGL</h4>
                <p className="text-xs text-gray-600 mt-1">3D Graphics</p>
              </div>

              {/* Performance */}
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#a29a88] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Core Web Vitals</h4>
                <p className="text-xs text-gray-600 mt-1">Performance</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Zertifizierungen & Partner */}
      <section className="py-16 md:py-24 px-8 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Zertifiziert & <span className="text-gray-300">Vertrauenswürdig</span>
              </h2>
              <p className="text-lg text-gray-600">
                Unsere Qualifikationen und Partnerschaften sprechen für sich
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Google Partner */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Partner</h3>
                <p className="text-gray-600 text-sm">
                  Zertifiziert für Google Ads, Analytics und Search Console Optimierung
                </p>
              </div>

              {/* Performance Expert */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Expert</h3>
                <p className="text-gray-600 text-sm">
                  Spezialisiert auf Core Web Vitals und Lighthouse Score Optimierung
                </p>
              </div>

              {/* DSGVO Konform */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DSGVO Konform</h3>
                <p className="text-gray-600 text-sm">
                  Alle Websites sind vollständig DSGVO-konform und rechtssicher
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-8 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bereit für mehr <span className="text-gray-300">Performance</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Website zur Leadmaschine machen. <br />
              Kostenlose Website-Analyse und unverbindliche Beratung in 24h.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6">
            <ConditionalMagnet innerClassName="hover:text-white">
              <a
                href="/kontakt"
                className="bg-black text-[#a29a88] px-10 py-4 rounded-full text-lg font-bold hover:text-white hover:shadow-2xl transition-all duration-300 group"
                style={{display: 'inline-block'}}
              >
                <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Website-Analyse
                  </span>
                </a>
              </ConditionalMagnet>
              <ConditionalMagnet>
                <a
                  href="/preise"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Pakete & Preise
                </a>
              </ConditionalMagnet>
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

      <Footer />
    </div>
  );
}