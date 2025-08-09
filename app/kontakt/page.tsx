"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import Magnet from '@/components/Magnet';
import ElegantShapes from '@/components/ElegantShapes';
import CustomCursor from '@/components/CustomCursor';
import MultiStepContactForm from '@/components/MultiStepContactForm';

export default function KontaktPage() {
  const handleFormSubmit = (data: any) => {
    console.log('Lead Score:', data.leadScore);
    console.log('Form Data:', data);
    // Hier würde HubSpot API-Call stattfinden
  };

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
              <a href="/kontakt" className="text-black font-semibold">Kontakt</a>
            </div>
            <div className="hidden md:block">
              <Magnet padding={20} disabled={false} magnetStrength={4} innerClassName="hover:text-white">
                <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md group" style={{display: 'inline-block'}}>
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Analyse
                  </span>
                </a>
              </Magnet>
            </div>
          </div>
        </div>
      </nav>

      <ElegantShapes />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bereit für mehr <span className="text-gray-300">Performance</span>?
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Kostenlose Website-Analyse in 60 Sekunden. Erfahren Sie, wie Sie Ihre Konkurrenz überholen.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Antwort in 24h
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                90% Seite 1 Erfolg
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Multi-Step Form Section */}
      <section className="py-16 px-8 bg-gray-50 relative">
        <div className="container mx-auto">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <MultiStepContactForm onSubmit={handleFormSubmit} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Direkte Kontaktoptionen */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Oder kontaktieren Sie uns direkt
              </h2>
              <p className="text-lg text-gray-600">
                Haben Sie konkrete Fragen? Sprechen Sie direkt mit unseren Experten.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Telefon */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Telefon</h3>
                <p className="text-gray-600 mb-4">Sofortige Beratung</p>
                <Magnet>
                  <a href="tel:+491234567890" className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    +49 123 456 7890
                  </a>
                </Magnet>
              </div>

              {/* WhatsApp */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Schnelle Antworten</p>
                <Magnet>
                  <a href="https://wa.me/491234567890" className="inline-block bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    Chat starten
                  </a>
                </Magnet>
              </div>

              {/* E-Mail */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Mail</h3>
                <p className="text-gray-600 mb-4">Detaillierte Anfragen</p>
                <Magnet>
                  <a href="mailto:hallo@sparkscale.de" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    hallo@sparkscale.de
                  </a>
                </Magnet>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Büro Adresse & Öffnungszeiten */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Adresse */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Unser Standort</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Spark&Scale GmbH</div>
                      <div>Musterstraße 123</div>
                      <div>12345 Musterhausen</div>
                      <div>Deutschland</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Erreichbarkeit</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span className="font-semibold text-gray-900">9:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag:</span>
                    <span className="font-semibold text-gray-900">10:00 - 14:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag:</span>
                    <span className="text-gray-500">Geschlossen</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-300">
                    <div className="text-sm text-gray-700 bg-gray-100 p-3 rounded-lg">
                      <strong>Notfall-Support:</strong> 24/7 für unsere Wartungsverträge verfügbar
                    </div>
                  </div>
                </div>
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