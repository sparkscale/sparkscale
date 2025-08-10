"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import CustomCursor from '@/components/CustomCursor';
import ConditionalConditionalMagnet from '@/components/ConditionalConditionalMagnet';

export default function AGBPage() {
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
              <ConditionalMagnet padding={20} disabled={false} magnetStrength={4} innerClassName="hover:text-white">
                <a href="/kontakt" className="bg-black text-[#a29a88] px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md group" style={{display: 'inline-block'}}>
                  <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
                    Kostenlose Analyse
                  </span>
                </a>
              </ConditionalMagnet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Gültig für alle Leistungen der Spark&Scale GmbH
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* AGB Content */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-[#a29a88]/10 p-8 rounded-2xl mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihre Partnerschaft mit Spark&Scale</h2>
                <p className="text-gray-700 leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen regeln die Zusammenarbeit zwischen der Spark&Scale GmbH und unseren Kunden. Wir legen großen Wert auf transparente und faire Geschäftsbeziehungen.
                </p>
              </div>

              <div className="space-y-12">
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 1 Geltungsbereich</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Spark&Scale GmbH (nachfolgend "Auftragnehmer") und dem Auftraggeber über die Erbringung von:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Website-Entwicklung und -Design</li>
                    <li>Suchmaschinenoptimierung (SEO)</li>
                    <li>Performance-Optimierung</li>
                    <li>Website-Wartung und Support</li>
                    <li>Beratungsdienstleistungen</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 2 Vertragsschluss</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>2.1</strong> Unsere Angebote sind freibleibend und unverbindlich, sofern nicht ausdrücklich als verbindlich bezeichnet.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>2.2</strong> Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder Beginn der Leistungserbringung zustande.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>2.3</strong> Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 3 Leistungsumfang</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>3.1</strong> Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung bzw. dem Angebot.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>3.2</strong> Änderungen oder Erweiterungen des Leistungsumfangs bedürfen einer schriftlichen Vereinbarung und können zu einer Anpassung der Vergütung führen.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance-Garantie</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Wir garantieren eine Verbesserung der Website-Performance um mindestens 40% oder Sie erhalten Ihr Geld zurück. Details zu den Messkriterien werden im jeweiligen Projekt definiert.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 4 Mitwirkungspflichten des Auftraggebers</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>4.1</strong> Der Auftraggeber stellt alle erforderlichen Informationen, Inhalte und Zugangsdaten rechtzeitig zur Verfügung.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>4.2</strong> Verzögerungen durch unvollständige oder verspätete Mitwirkung des Auftraggebers können zu Terminverschiebungen und Mehrkosten führen.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>4.3</strong> Der Auftraggeber ist für die Rechtmäßigkeit der bereitgestellten Inhalte verantwortlich.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 5 Vergütung und Zahlung</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>5.1</strong> Die Vergütung richtet sich nach der vereinbarten Leistungsbeschreibung.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>5.2</strong> Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>5.3</strong> Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Zahlungsmodalitäten</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Anzahlung: 50% bei Projektbeginn</li>
                        <li>Zwischenzahlung: 30% bei Projektmitte</li>
                        <li>Schlusszahlung: 20% bei Projektabschluss</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 6 Urheberrecht und Nutzungsrechte</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>6.1</strong> Alle Urheberrechte an den erstellten Werken verbleiben beim Auftragnehmer bis zur vollständigen Bezahlung.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>6.2</strong> Nach vollständiger Zahlung erhält der Auftraggeber die einfachen Nutzungsrechte für den vereinbarten Zweck.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>6.3</strong> Eine Weiterveräußerung oder Unterlizenzierung der Werke ist ohne ausdrückliche Zustimmung nicht gestattet.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 7 Gewährleistung</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>7.1</strong> Wir gewährleisten die vertragsgemäße Erbringung unserer Leistungen.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>7.2</strong> Mängel sind unverzüglich schriftlich anzuzeigen. Wir behalten uns vor, Mängel zunächst nachzubessern.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>7.3</strong> Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme der Leistung.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 8 Haftung</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>8.1</strong> Wir haften unbeschränkt bei Vorsatz, grober Fahrlässigkeit und Verletzung von Leben, Körper oder Gesundheit.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>8.2</strong> Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten, beschränkt auf den vorhersehbaren Schaden.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>8.3</strong> Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 9 Kündigung</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>9.1</strong> Verträge können von beiden Seiten mit einer Frist von 4 Wochen zum Monatsende gekündigt werden.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>9.2</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>9.3</strong> Bei Kündigung durch den Auftraggeber sind bereits erbrachte Leistungen zu vergüten.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 10 Schlussbestimmungen</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>10.1</strong> Es gilt das Recht der Bundesrepublik Deutschland.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>10.2</strong> Erfüllungsort und Gerichtsstand ist der Sitz des Auftragnehmers.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>10.3</strong> Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit des Vertrages im Übrigen unberührt.
                    </p>
                  </div>
                </div>

                <div className="bg-[#a29a88]/10 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontakt bei Fragen</h3>
                  <p className="text-sm text-gray-600">
                    Bei Fragen zu diesen AGB kontaktieren Sie uns gerne:<br/>
                    <strong>E-Mail:</strong> hallo@sparkscale.de<br/>
                    <strong>Telefon:</strong> +49 123 456 7890<br/><br/>
                    <em>Stand: Januar 2024</em>
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
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="text-[#a29a88] font-semibold">AGB</a></li>
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