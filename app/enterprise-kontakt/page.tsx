'use client';

import { useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import MobileMenu from '@/components/MobileMenu';
import {
  IconHome,
  IconBriefcase,
  IconCurrencyDollar,
  IconCalculator,
  IconNews,
  IconMail,
} from '@tabler/icons-react';

export default function EnterpriseKontaktPage() {
  const [formData, setFormData] = useState({
    unternehmen: '',
    ansprechpartner: '',
    position: '',
    email: '',
    telefon: '',
    nachricht: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enterprise-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          unternehmen: '',
          ansprechpartner: '',
          position: '',
          email: '',
          telefon: '',
          nachricht: '',
        });
      } else {
        console.error('API Error:', result);
        alert(result.error || 'Fehler beim Senden der Nachricht');
        if (result.details) {
          console.error('Error details:', result.details);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(
        'Netzwerkfehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#a29a88]/20 text-[#a29a88] px-6 py-3 rounded-full text-sm font-semibold mb-6">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Enterprise Strategiegespräch
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Maßgeschneiderte{' '}
                <span className="text-[#a29a88]">Enterprise-Lösungen</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Für Unternehmen, die digitale Exzellenz anstreben. Individuelle
                Strategien, skalierbare Lösungen und persönliche Betreuung auf
                höchstem Niveau.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-12 h-12 bg-[#a29a88]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-[#a29a88]"
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
                <h3 className="text-lg font-semibold mb-2">
                  Persönlicher Account Manager
                </h3>
                <p className="text-gray-400 text-sm">
                  Dedizierte Betreuung für Ihr Projekt
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-12 h-12 bg-[#a29a88]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-[#a29a88]"
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
                <h3 className="text-lg font-semibold mb-2">
                  Skalierbare Architektur
                </h3>
                <p className="text-gray-400 text-sm">
                  Zukunftssichere Technologie-Stacks
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-12 h-12 bg-[#a29a88]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-[#a29a88]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Performance-Garantie
                </h3>
                <p className="text-gray-400 text-sm">
                  SLA mit messbaren Ergebnissen
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lassen Sie uns über Ihr Projekt sprechen
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Vereinbaren Sie ein unverbindliches Strategiegespräch. Wir
                analysieren Ihre Anforderungen und entwickeln eine
                maßgeschneiderte Lösung.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.4}>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unternehmen *
                      </label>
                      <input
                        type="text"
                        name="unternehmen"
                        value={formData.unternehmen}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none transition-colors"
                        placeholder="Ihr Unternehmen"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ansprechpartner *
                      </label>
                      <input
                        type="text"
                        name="ansprechpartner"
                        value={formData.ansprechpartner}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none transition-colors"
                        placeholder="Ihr Name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position/Funktion
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none transition-colors"
                      placeholder="z.B. Geschäftsführer, Marketing Director"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail Adresse *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none transition-colors"
                        placeholder="ihre.email@unternehmen.de"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none transition-colors"
                        placeholder="+49 (0) 123 456789"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kurze Projektbeschreibung
                    </label>
                    <textarea
                      name="nachricht"
                      value={formData.nachricht}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none transition-colors resize-none"
                      placeholder="Beschreiben Sie kurz Ihr Projekt, Ihre Ziele und besonderen Anforderungen..."
                    />
                  </div>

                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                          : 'bg-[#a29a88] text-black hover:brightness-110 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting
                        ? 'Wird gesendet...'
                        : 'Strategiegespräch vereinbaren'}
                    </button>
                  </div>

                  <div className="text-center text-sm text-gray-500 mt-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg
                        className="w-4 h-4 text-green-600"
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
                      100% kostenlos • Keine Verpflichtungen • DSGVO-konform
                    </div>
                    <p>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-600"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Wir haben Ihre Nachricht erhalten und melden uns innerhalb
                    von 24 Stunden bei Ihnen, um ein persönliches
                    Strategiegespräch zu vereinbaren.
                  </p>
                  <a
                    href="/preise"
                    className="inline-block bg-[#a29a88] text-black px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all duration-300"
                  >
                    Zurück zu den Paketen
                  </a>
                </div>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
