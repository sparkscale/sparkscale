"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import CustomCursor from '@/components/CustomCursor';
// Mobile-optimized: Magnet effects removed

export default function DatenschutzPage() {
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
            <div className="hidden md:block">
              <div>
                <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md group" style={{display: 'inline-block'}}>
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Analyse
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Datenschutz Content */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-[#a29a88]/10 p-8 rounded-2xl mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihre Datensicherheit ist unser Anliegen</h2>
                <p className="text-gray-700 leading-relaxed">
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir mit Ihren personenbezogenen Daten umgehen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.
                </p>
              </div>

              <div className="space-y-12">
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Verantwortlicher</h2>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Spark&Scale GmbH</strong><br/>
                      Musterstraße 123<br/>
                      12345 Musterhausen<br/>
                      Deutschland<br/><br/>
                      <strong>E-Mail:</strong> datenschutz@sparkscale.de<br/>
                      <strong>Telefon:</strong> +49 123 456 7890
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Datenerfassung auf dieser Website</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontaktformular</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Name und E-Mail-Adresse (Pflichtangaben)</li>
                        <li>Telefonnummer (optional)</li>
                        <li>Projektdetails und Budget-Informationen</li>
                        <li>Zeitstempel der Anfrage</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)<br/>
                        <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme<br/>
                        <strong>Speicherdauer:</strong> 3 Jahre nach letztem Kontakt
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">ROI-Rechner</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Bei Nutzung unseres ROI-Rechners speichern wir anonymisierte Nutzungsdaten zur Verbesserung des Tools. Personenbezogene Daten werden nur mit Ihrer ausdrücklichen Einwilligung erfasst.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Cookies und Tracking</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technisch notwendige Cookies</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Wir verwenden technisch notwendige Cookies für die Funktionalität der Website. Diese können nicht deaktiviert werden.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Analyse-Cookies (optional)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Mit Ihrer Einwilligung verwenden wir Google Analytics zur Verbesserung unserer Website:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                        <li>Anonymisierte IP-Adressen</li>
                        <li>Seitenaufrufe und Verweildauer</li>
                        <li>Geräteinformationen (Browser, Betriebssystem)</li>
                        <li>Herkunftsseiten (Referrer)</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br/>
                        <strong>Widerruf:</strong> Jederzeit über unsere Cookie-Einstellungen möglich
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Externe Dienste</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Fonts</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Wir verwenden Google Fonts zur einheitlichen Darstellung von Schriftarten. Google Fonts werden lokal gehostet, sodass keine Daten an Google übertragen werden.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">HubSpot CRM</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Zur Verwaltung von Kundenanfragen nutzen wir HubSpot. Ihre Daten werden entsprechend den HubSpot-Datenschutzbestimmungen verarbeitet und auf Servern in der EU gespeichert.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Ihre Rechte</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed mb-4">Sie haben jederzeit folgende Rechte:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Auskunft</strong> über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                      <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                      <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
                      <li><strong>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
                      <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                      <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
                      <li><strong>Widerruf</strong> erteilter Einwilligungen</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Kontakt:</strong> datenschutz@sparkscale.de
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Datensicherheit</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Wir verwenden moderne Sicherheitsmaßnahmen zum Schutz Ihrer Daten:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                    <li>SSL-Verschlüsselung für alle Datenübertragungen</li>
                    <li>Regelmäßige Sicherheitsupdates</li>
                    <li>Zugriffsbeschränkungen für Mitarbeiter</li>
                    <li>Backup-Systeme mit Verschlüsselung</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Beschwerderecht</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die für uns zuständige Aufsichtsbehörde ist der Landesbeauftragte für Datenschutz und Informationsfreiheit des Bundeslandes, in dem sich unser Firmensitz befindet.
                  </p>
                </div>

                <div className="bg-[#a29a88]/10 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Aktualisierung dieser Datenschutzerklärung</h3>
                  <p className="text-sm text-gray-600">
                    Diese Datenschutzerklärung wurde zuletzt am 1. Januar 2024 aktualisiert. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um den aktuellen rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Leistungen umzusetzen.
                  </p>
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
                <li><a href="/leistungen" className="hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/preise" className="hover:text-white transition-colors">Preise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="text-[#a29a88] font-semibold">Datenschutz</a></li>
                <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
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



