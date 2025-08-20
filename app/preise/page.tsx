'use client';

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
  IconMail,
} from '@tabler/icons-react';

import ShinyText from '@/components/ShinyText';

export default function PreisePage() {
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
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: 'Leistungen',
      link: '/leistungen',
      icon: <IconBriefcase className="h-4 w-4" />,
    },

    {
      name: 'Preise',
      link: '/preise',
      icon: <IconCurrencyDollar className="h-4 w-4" />,
    },
    {
      name: 'ROI-Rechner',
      link: '/roi-rechner',
      icon: <IconCalculator className="h-4 w-4" />,
    },
    {
      name: 'Blog',
      link: '/blog',
      icon: <IconNews className="h-4 w-4" />,
    },
    {
      name: 'Kontakt',
      link: '/kontakt',
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
                Unsere <span className="text-[#a29a88]">Pakete</span>
              </h1>
              <p className="text-xl text-[#a29a88] max-w-3xl mx-auto">
                Transparent, fair und ergebnisorientiert. Wählen Sie das Paket,
                das am besten zu Ihren Zielen und Ihrem Budget passt. Alle
                Pakete mit Performance-Garantie.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pakete Grid */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation
            animation="staggerUp"
            delay={0.3}
            stagger={0.15}
            triggerStart="top 95%"
          >
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Starter Paket */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Schneller Einstieg
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Starter-Paket
                  </h3>
                  <div className="text-4xl font-light text-black mb-2">
                    2.500€
                  </div>
                  <p className="text-gray-500 text-sm">Einmaliger Festpreis</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-black mb-4">
                    Perfekt für:
                  </h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Kleine Unternehmen & Startups
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Erste professionelle Website
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Budget bis 3.000€
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Landing Page + 3 Unterseiten
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Responsive Design, optimiert für alle Geräte
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Basic SEO Setup
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Meta-Tags, strukturierte Daten, Sitemap
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Performance-Optimierung
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Core Web Vitals, Lighthouse Score &gt;90
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        3 Monate Support inklusive
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Updates, Bugfixes + dauerhafter Support verfügbar
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">
                      Projektdauer:
                    </div>
                    <div className="text-sm font-semibold text-black">
                      2-3 Wochen
                    </div>
                  </div>
                </div>

                <div>
                  <button className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
                    Sofort starten
                  </button>
                </div>
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Vollständige Lösung
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    <ShinyText
                      text="Pro-Paket"
                      className="text-2xl font-bold"
                    />
                  </h3>
                  <div className="text-4xl font-light text-black mb-2">
                    <ShinyText text="5.500€" className="text-4xl font-light" />
                  </div>
                  <p className="text-gray-500 text-sm">Einmaliger Festpreis</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-black mb-4">
                    Perfekt für:
                  </h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Etablierte KMUs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Lokale Marktführerschaft
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Ernsthafte Online-Präsenz
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Website (bis 10 Seiten)
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Individuelle Gestaltung, CMS-Integration
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        KI-Optimierung + Schema Markup
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Zukunftssicher für ChatGPT, Bard & Co
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Local SEO + Google My Business
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Lokale Sichtbarkeit, Review-Management
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Performance-Garantie
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Professionelle Optimierung
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        3 Monate Premium Support inklusive
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Priorität-Support + dauerhafter Support verfügbar
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <div className="text-xs text-gray-500 mb-2">
                      Projektdauer:
                    </div>
                    <div className="text-sm font-semibold text-black">
                      4-6 Wochen
                    </div>
                  </div>
                </div>

                <div>
                  <button className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg">
                    Beratung buchen
                  </button>
                </div>
              </div>

              {/* Enterprise Paket */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Marktführer werden
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Enterprise
                  </h3>
                  <div className="text-4xl font-light text-black mb-2">
                    ab 9.500€
                  </div>
                  <p className="text-gray-500 text-sm">Individuell angepasst</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-black mb-4">
                    Perfekt für:
                  </h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Große Unternehmen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        E-Commerce Shops
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-black"
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
                      <span className="text-sm text-gray-600">
                        Komplexe Anforderungen
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Custom Development
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Maßgeschneiderte Lösungen, API-Integrationen
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        E-Commerce Integration
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Shopify, WooCommerce, custom Solutions
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        Umfassendes SEO + KI-Strategy
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Enterprise SEO, Content-Strategie
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="text-gray-700 text-sm font-medium">
                        3 Monate Full-Service Support inklusive
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Account Manager + dauerhafter Support verfügbar
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">
                      Projektdauer:
                    </div>
                    <div className="text-sm font-semibold text-black">
                      8-12 Wochen
                    </div>
                  </div>
                </div>

                <div>
                  <button className="w-full border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                    Strategiegespräch
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Marketing & Social Media Paket */}
          <ScrollAnimation animation="slideUp" delay={0.5}>
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-[#a29a88] text-black px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4"
                    />
                  </svg>
                  Full-Stack Digital Partner
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Marketing & Social Media{' '}
                  <span className="text-gray-600">Komplettpaket</span>
                </h2>
              </div>

              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ab 1.000 €/Monat
                  </h3>

                  <div className="bg-gray-900 p-6 rounded-xl mb-8">
                    <h4 className="text-lg font-bold text-[#a29a88] mb-4">
                      Enthalten:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                      <div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-[#a29a88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white font-medium">
                              Vollständige Betreuung: Instagram, Facebook & TikTok
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-[#a29a88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white font-medium">
                              Kontinuierliche Posts & Stories
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-[#a29a88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white font-medium">
                              Strategische Werbekampagnen zugeschnitten auf Ihre Zielgruppe
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-[#a29a88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white font-medium">
                              Eigene Foto- & Video-Shootings
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-[#a29a88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white font-medium">
                              Community Management – wir antworten für Sie
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-[#a29a88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white font-medium">
                              Monatliche Strategie-Calls & Reports
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-lg text-[#a29a88] font-semibold mb-4">
                    Perfekt für: Selbstständige mit 50.000 €+ Jahresumsatz,
                    die professionell auftreten wollen
                  </p>
                  <p className="text-xl text-white font-bold">
                    Für organische Lead-Gewinnung
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/kontakt"
                      className="bg-[#a29a88] text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
                    >
                      Marketing-Beratung buchen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* ROI-Garantie Section */}
          <ScrollAnimation animation="scaleIn" delay={0.6}>
            <div className="text-center bg-gray-100 border border-gray-300 rounded-2xl p-12 max-w-5xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">
                  Performance-Garantie & ROI
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">100%</div>
                  <div className="text-sm text-gray-700">
                    Fokus auf Core Web Vitals Optimierung
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    6 Monate
                  </div>
                  <div className="text-sm text-gray-700">
                    Durchschnittliche Amortisation der Investition
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">90%</div>
                  <div className="text-sm text-gray-700">
                    Unserer Kunden erreichen Seite 1 Rankings
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Eine professionelle Website-Optimierung kann zu mehr Leads und
                besseren Rankings führen und höhere Conversion-Raten. Wir stehen
                zu unseren Versprechen.
              </p>

              <div>
                <a
                  href="/roi-rechner"
                  className="bg-black text-white px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-all duration-300 rounded-full shadow-lg inline-block"
                >
                  Kostenlosen ROI-Rechner nutzen
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Dauerhafter Support Section */}
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <div className="max-w-6xl mx-auto mt-20 mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-black mb-4">
                  Dauerhafter Support für Ihren Erfolg
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Nach dem Launch ist vor dem Wachstum. Wir begleiten Sie langfristig mit 
                  professionellem Support – individuell nach Ihrem Bedarf.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Hosting & Wartung */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">Hosting & Wartung</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Premium-Hosting (99,9% Uptime)</li>
                    <li>• SSL-Zertifikate</li>
                    <li>• Automatische Backups</li>
                    <li>• Security-Updates</li>
                    <li>• Performance-Monitoring</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    ab 49€/Monat je nach Größe
                  </div>
                </div>

                {/* SEO & SGE Optimierung */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">SEO & SGE Optimierung</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Monatliche SEO-Optimierung</li>
                    <li>• KI-Search Anpassungen (SGE)</li>
                    <li>• Content-Updates</li>
                    <li>• Ranking-Monitoring</li>
                    <li>• Keyword-Recherche</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    ab 299€/Monat je nach Umfang
                  </div>
                </div>

                {/* Bug Fixes & Updates */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">Bug Fixes & Updates</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Schnelle Fehlerbehebung</li>
                    <li>• Feature-Updates</li>
                    <li>• Browser-Kompatibilität</li>
                    <li>• Mobile Optimierungen</li>
                    <li>• Performance-Verbesserungen</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    ab 89€/Stunde nach Aufwand
                  </div>
                </div>

                {/* Kunden Support */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">Kunden Support</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Schulungen & Training</li>
                    <li>• CMS-Support</li>
                    <li>• Content-Beratung</li>
                    <li>• Analytics & Reports</li>
                    <li>• Strategische Beratung</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    ab 149€/Monat je nach Betreuung
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                  <h4 className="text-xl font-semibold text-black mb-4">
                    Individueller Support für alle Pakete
                  </h4>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Egal ob Starter, Professional oder Enterprise – wir bieten für jedes Paket 
                    maßgeschneiderten Support. Die Preise richten sich nach dem tatsächlichen Aufwand 
                    und Ihren individuellen Anforderungen.
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
                      Support-Beratung buchen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <div className="hidden max-w-4xl mx-auto mt-20">
              <h3 className="text-2xl font-bold text-center text-black mb-12">
                Häufige Fragen
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">
                    Warum Festpreise?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Transparenz und Planbarkeit für Sie. Keine versteckten
                    Kosten, keine bösen Überraschungen. Sie wissen von Anfang
                    an, was Sie investieren.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">
                    Was ist bei den Paketen enthalten?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Alles was Sie für eine professionelle Website brauchen:
                    Design, Entwicklung, SEO-Setup, Performance-Optimierung und
                    Support. Hosting können wir optional übernehmen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">
                    Wie funktioniert die Performance-Garantie?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Wir arbeiten kontinuierlich an der Verbesserung Ihrer Core
                    Web Vitals Werte. So einfach ist das. Wir sind von unserer
                    Qualität überzeugt.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-black mb-3">
                    Kann ich später upgraden?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Selbstverständlich! Sie können jederzeit auf ein höheres
                    Paket upgraden. Bereits investierte Beträge werden
                    angerechnet.
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
              Bereit für{' '}
              <span className="text-black">professionelle Ergebnisse</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Strategiegespräch
              herausfinden, welches Paket perfekt zu Ihren Zielen passt.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.1} stagger={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div>
                <button
                  className="bg-black text-[#a29a88] px-8 py-4 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full shadow-lg group"
                  style={{ display: 'inline-block' }}
                >
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Website-Analyse
                  </span>
                </button>
              </div>
              <div>
                <button className="border-2 border-black text-black px-12 py-4 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-full">
                  Strategiegespräch buchen
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Trust Badges */}
          <ScrollAnimation animation="staggerUp" delay={0.2} stagger={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-100">
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
                  Transparente Abrechnung
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
                  Performance-Garantie
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
