'use client';

import { useState, useEffect } from 'react';
import SplitText from '@/components/animations/SplitText';
// Mobile-optimized: Magnet effects removed
import ScrollVelocity from '@/components/ScrollVelocity';
import RotatingText from '@/components/RotatingText';

import ShinyText from '@/components/ShinyText';
import CustomCursor from '@/components/CustomCursor';
import Beams from '@/components/Beams';
import { InfiniteMovingCards } from '@/components/InfiniteMovingCards';
import ScrollAnimation from '@/components/ScrollAnimation';
import CountUp from '@/components/CountUp';
import DynamicCTA from '@/components/DynamicCTA';
import MobileMenu from '@/components/MobileMenu';
import MobileSVG from '@/components/MobileSVG';
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

export default function Home() {
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

  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Leistungen",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "/leistungen",
    },

    {
      title: "Preise",
      icon: <IconCurrencyDollar className="h-full w-full" />,
      href: "/preise",
    },
    {
      title: "ROI-Rechner",
      icon: <IconCalculator className="h-full w-full" />,
      href: "/roi-rechner",
    },
    {
      title: "Blog",
      icon: <IconNews className="h-full w-full" />,
      href: "/blog",
    },
    {
      title: "Kontakt",
      icon: <IconMail className="h-full w-full" />,
      href: "/kontakt",
    },
  ];

  const navItems = [
    {
      name: "Leistungen",
      link: "/leistungen",
      icon: <IconBriefcase className="h-4 w-4" />,
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

      {/* Hero Section - Video with Overlay Buttons */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Desktop Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          playsInline
        >
          <source src="/Spark&Scale (Video).mp4" type="video/mp4" />
        </video>
       
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-black md:hidden"
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>

        {/* Mobile Invisible Button Overlays (navy Ovale rechts) */}
        {/* Oberes Oval → Kontakt */}
        <a
          href="/kontakt"
          aria-label="Website kostenlos analysieren"
          className="absolute md:hidden z-20"
          style={{ right: '4%', top: '62%', width: '54%', height: '7%' }}
        />
        {/* Unteres Oval → Über uns */}
        <a
          href="/ueber-uns"
          aria-label="Mehr erfahren"
          className="absolute md:hidden z-20"
          style={{ right: '4%', top: '73%', width: '54%', height: '7%' }}
        />

        {/* Overlay Buttons - Desktop Only */}
        <div className="absolute bottom-20 left-[200px] flex-col sm:flex-row gap-6 z-10 hidden md:flex">
                <a 
                  href="/kontakt"
            className="bg-[#a29a88] text-[#1f2937] px-8 py-3 text-sm font-medium hover:bg-[#b8a896] transition-all duration-300 rounded-full"
                >
                    Website kostenlos analysieren
                </a>
                <a 
            href="/ueber-uns"
            className="bg-[#a29a88] text-[#1f2937] px-8 py-3 text-sm font-medium hover:bg-[#b8a896] transition-all duration-300 rounded-full"
                >
            Mehr erfahren
                </a>
        </div>
      </section>

      {/* Landing Page - Full-Stack Digital Partner */}
      <section className="py-16 md:py-24 px-8 bg-white">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
                Schluss mit Agentur-Hopping – <span className="text-[#a29a88]">wir kümmern uns um alles</span>
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-6">Sie kennen das:</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#1f2937'}}>
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <span className="text-gray-700">Website bei Agentur A</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#1f2937'}}>
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <span className="text-gray-700">Social Media bei Freelancer B</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#1f2937'}}>
                        <span className="text-white font-bold text-sm">C</span>
                      </div>
                      <span className="text-gray-700">Ads bei Dienstleister C</span>
                    </div>
                  </div>
                  <p className="text-center text-gray-600 mt-6 font-semibold">
                    Und am Ende passt nichts zusammen. <span style={{color: '#1f2937'}}>Ergebnis: hohe Kosten, schwache Resultate.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-[#a29a88] mb-4 text-center">
                    Unser Ansatz: Full-Stack Digital Partner
                  </h3>
                  <p className="text-xl text-center mb-8">
                    Eine Strategie. Ein Team. Messbare Ergebnisse.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              
              {/* Performance-Website & SEO */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Performance-Website & SEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gefunden werden und Kunden überzeugen
                </p>
              </div>

              {/* Social Media auf Autopilot */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Social Media auf Autopilot</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Instagram, Facebook & TikTok, strategisch & konsistent
                </p>
              </div>

              {/* Ads, die sich rechnen */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Ads, die sich rechnen</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gezielte Kampagnen für bessere Ergebnisse
                </p>
              </div>

              {/* Content aus einer Hand */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#a29a88] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Content aus einer Hand</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fotos & Videos, abgestimmt auf Ihre Marke
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.5}>
            <div className="bg-gray-50 p-8 rounded-2xl max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Das Ergebnis für Sie:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Ein Ansprechpartner statt fünf</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Mehr Zeit fürs Kerngeschäft</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Kampagnen, die perfekt zusammenspielen</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Jeder Euro Werbebudget arbeitet für Sie</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.6}>
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-black mb-6">Jetzt starten – kostenlos & unverbindlich</h3>
              <p className="text-xl text-gray-700 mb-8">Fordern Sie Ihre individuelle Potenzial-Analyse an:</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#a29a88] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-black">Website-Check</h4>
                  <p className="text-gray-600 text-sm">Wo verlieren Sie Kunden?</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#a29a88] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-black">Konkurrenz-Analyse</h4>
                  <p className="text-gray-600 text-sm">Was machen andere besser?</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#a29a88] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-black">Strategie-Roadmap</h4>
                  <p className="text-gray-600 text-sm">Ihr Weg zu 3× mehr Anfragen</p>
                </div>
              </div>



              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href="/kontakt" className="bg-[#a29a88] text-black px-10 py-4 text-lg font-semibold hover:bg-[#a29a88] transition-all duration-300 rounded-full shadow-lg">
                  Kostenlose Analyse sichern
                </a>
                <a 
                  href="/preise"
                  className="border-2 border-[#a29a88] text-[#a29a88] px-10 py-4 text-lg font-semibold hover:bg-[#a29a88] hover:text-black transition-all duration-300 rounded-full inline-block"
                >
                  Pakete & Preise ansehen
                </a>
              </div>

              <p className="text-gray-300 text-sm">
                Keine Verpflichtung. Keine versteckten Kosten. Nur klare Empfehlungen für mehr Kunden und Umsatz.
              </p>
            </div>
          </ScrollAnimation>
      </section>

      {/* 3 Hauptbenefits - Conversion Focus mit schwarzem Hintergrund */}
      <section className="py-16 md:py-24 px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
                Warum{' '}
                <span className="font-bold text-[#a29a88]">Spark&Scale</span>?
              </h2>
              <p className="text-lg text-gray-300">
                Modernste SEO & Performance Technologie für Ihren Erfolg
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animation="staggerUp"
            delay={0.2}
            stagger={0.15}
            triggerStart="top 98%"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a29a88] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  SEO-Optimierung
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Modernste SEO-Techniken für Top-Rankings. Strukturierte Daten, 
                  technische Optimierung und Content-Strategien für mehr 
                  Sichtbarkeit.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a29a88] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  KI-Search Ready
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Vorbereitung auf Googles KI-Suche und semantische Search.
                  Entity-SEO, Featured Snippets und strukturierte Daten für 
                  maximale Sichtbarkeit.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a29a88] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Performance-Optimierung
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Lighthouse Score Optimierung, Core Web Vitals und 
                  schnelle Ladezeiten. Technische Exzellenz für 
                  bessere Rankings und Conversions.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Urgency Element */}
          <ScrollAnimation
            animation="scaleIn"
            delay={0.3}
            triggerStart="top 98%"
          >
            <div className="text-center bg-[#a29a88] rounded-2xl p-6">
              <div className="inline-flex items-center gap-2 text-black font-semibold text-sm mb-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Begrenzte Kapazität
              </div>
              <p className="text-black text-sm font-medium">
                Nur{' '}
                <span className="font-bold">5 neue Projekte pro Monat</span>{' '}
                für maximale Qualität und persönliche Betreuung. 
                Sichern Sie sich Ihren Platz.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 md:py-28 px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black leading-tight">
              Bereit für <span className="font-bold">mehr Erfolg</span>?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeIn" delay={0.4}>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Strategiegespräch
              herausfinden, wie wir Ihre Website zum Umsatzmotor machen.
            </p>
          </ScrollAnimation>

          {/* Multiple CTA Options */}
          <ScrollAnimation
            animation="slideUp"
            delay={0.3}
            triggerStart="top 98%"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div>
                <a 
                  href="/kontakt"
                  className="bg-gradient-to-r from-gray-900 to-black text-[#a29a88] px-10 py-4 text-lg font-semibold hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 inline-block group"
                  style={{ display: 'inline-block' }}
                >
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Website-Analyse
                  </span>
                </a>
              </div>

            </div>
          </ScrollAnimation>

                    {/* Trust Badges */}
          <ScrollAnimation
            animation="staggerUp"
            delay={0.8}
            stagger={0.1}
            triggerStart="top 95%"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Transparente Preise
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm font-medium">100% DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Kostenlose Erstberatung
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials - Social Proof - HIDDEN */}
      <section className="hidden py-16 md:py-24 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-black">
                Das sagen unsere <span className="font-bold">Kunden</span>
              </h2>
              <p className="text-lg text-gray-500">
                Echte Erfahrungen, echte Ergebnisse
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.4}>
            <div className="text-center py-8">
              <div className="bg-gray-50 p-8 rounded-2xl max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Unser Versprechen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wir arbeiten mit modernster Technologie und bewährten Strategien, 
                  um Ihre Website zu optimieren und Ihre Online-Präsenz zu stärken. 
                  Jedes Projekt wird individuell betreut und auf Ihre Ziele ausgerichtet.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Erfolg in Zahlen - HIDDEN */}
      <section className="hidden py-16 md:py-20 px-8 bg-gradient-to-br from-black via-gray-800 to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
                Erfolg in Zahlen
              </h2>
              <p className="text-lg text-gray-300">
                Unsere Resultate sprechen für sich
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animation="staggerUp"
            delay={0.3}
            stagger={0.1}
            triggerStart="top 95%"
          >
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2 text-black">
                  +
                  <CountUp
                    from={0}
                    to={3800}
                    separator="."
                    direction="up"
                    duration={2.5}
                    delay={0.5}
                    className="text-[#a29a88]"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  SEO-Optimierungen erfolgreich
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2 text-black">
                  <CountUp
                    from={0}
                    to={4.9}
                    direction="up"
                    duration={2}
                    delay={0.7}
                    className="text-[#a29a88]"
                  />
                  /5
                  </div>
                <p className="text-gray-300 text-sm font-medium">
                  Kundenbewertung
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2 text-black">
                  <CountUp
                    from={0}
                    to={90}
                    direction="up"
                    duration={2.2}
                    delay={0.9}
                    className="text-[#a29a88]"
                  />
                  %
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Seite 1 Ranking
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2 text-black">
                  +
                  <CountUp
                    from={0}
                    to={340}
                    direction="up"
                    duration={2.8}
                    delay={1.1}
                    className="text-[#a29a88]"
                  />
                  %
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Performance Boost
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="hidden py-16 md:py-24 px-8 bg-gray-50 flex items-center">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight text-black">
              Lassen Sie uns etwas
              <br />
              Großartiges erschaffen
            </h2>
          </ScrollAnimation>
          <ScrollAnimation
            animation="scaleIn"
            delay={0.4}
            triggerStart="top 98%"
          >
            <div>
              <a
                href="/kontakt"
                className="inline-block bg-[#a29a88] text-black px-8 py-3 text-sm font-medium hover:bg-[#b8a896] hover:text-black transition-all duration-300 font-semibold border border-[#a29a88]"
              >
                Projekt starten
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer - Phase 4.1 Mobile-First */}
      <footer className="py-8 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto max-w-6xl">
          {/* Desktop Footer */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-medium mb-3 text-[#a29a88] text-sm">
                Projekte
              </h4>
              <div className="space-y-1 text-xs text-gray-300">
                <div>Rechtsanwälte</div>
                <div>Ärzte & Praxen</div>
                <div>E-Commerce</div>
                <div>Agenturen</div>
                <div>SaaS</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-[#a29a88] text-sm">
                Services
              </h4>
              <div className="space-y-1 text-xs text-gray-300">
                <div>Webdesign</div>
                <div>Development</div>
                <div>SEO & KI</div>
                <div>Performance</div>
                <div>Hosting</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-[#a29a88] text-sm">
                Kontakt
              </h4>
              <div className="space-y-1 text-xs text-gray-300">
                <div>Termin buchen</div>
                <div>Email schreiben</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-[#a29a88] text-sm">
                Social
              </h4>
              <div className="space-y-1 text-xs text-gray-300">
                <div>LinkedIn</div>
                <div>Instagram</div>
                <div>Twitter</div>
              </div>
            </div>
          </div>

          {/* Mobile Footer - Nur Social Links */}
          <div className="md:hidden mb-8">
            {/* Social Links - sekundär auf Mobile */}
            <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-gray-700">
              <a
                href="https://linkedin.com/company/sparkscale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#a29a88] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/sparkscale.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#a29a88] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.717-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001.012.017z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Coming Soon */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-6 text-center border border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-[#a29a88]">Newsletter Coming Soon</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Wir arbeiten an wertvollen Inhalten für Ihren Postfach.<br/>SEO-Updates, Performance-Tricks & KI-News in Vorbereitung.
            </p>
            <div className="max-w-md mx-auto">
              <button 
                disabled 
                className="bg-gray-600 text-gray-400 px-6 py-2 rounded-full text-sm font-semibold cursor-not-allowed opacity-60"
              >
                Bald verfügbar
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Folgen Sie uns für Updates oder kontaktieren Sie uns direkt.
            </p>
          </div>
          
          {/* Copyright & Legal */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs text-gray-400">
              <a
                href="#datenschutz"
                className="hover:text-[#a29a88] transition-colors"
              >
                Datenschutz
              </a>
              <a
                href="#impressum"
                className="hover:text-[#a29a88] transition-colors"
              >
                Impressum
              </a>
              <a href="#agb" className="hover:text-[#a29a88] transition-colors">
                AGB
              </a>
            </div>
            <div className="text-xs text-gray-400">
              © Spark&Scale, 2025. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic CTAs - Phase 4.2 */}
      <DynamicCTA />
      
      {/* Mobile Video Autoplay Script */}
      <MobileVideoScript />
    </div>
  );
}

// Mobile Video Autoplay Script
const MobileVideoScript = () => (
  <script dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('DOMContentLoaded', () => {
        const video = document.querySelector('.hero-video-mobile');
        if (video && /Mobi|Android/i.test(navigator.userAgent)) {
          video.setAttribute('muted', '');
          video.setAttribute('playsinline', '');
          video.setAttribute('autoplay', '');
          video.play().catch(err => {
            console.log('Autoplay blockiert auf Mobile:', err);
          });
        }
      });
    `
  }} />
);



