"use client";

import ConditionalConditionalMagnet from './ConditionalConditionalMagnet';

export default function Footer() {
  return (
    <footer className="py-8 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-medium mb-3 text-[#a29a88] text-sm">Projekte</h4>
            <div className="space-y-1 text-xs text-white">
              <div>Rechtsanwälte</div>
              <div>Ärzte & Praxen</div>
              <div>E-Commerce</div>
              <div>Agenturen</div>
              <div>SaaS</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-[#a29a88] text-sm">Services</h4>
            <div className="space-y-1 text-xs text-white">
              <a href="/leistungen" className="block hover:text-[#a29a88] transition-colors">Webdesign</a>
              <a href="/leistungen" className="block hover:text-[#a29a88] transition-colors">Development</a>
              <a href="/leistungen" className="block hover:text-[#a29a88] transition-colors">SEO & KI</a>
              <a href="/leistungen" className="block hover:text-[#a29a88] transition-colors">Performance</a>
              <a href="/roi-rechner" className="block hover:text-[#a29a88] transition-colors">ROI-Rechner</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-[#a29a88] text-sm">Kontakt</h4>
            <div className="space-y-1 text-xs text-white">
              <div>Termin buchen</div>
              <div>Email schreiben</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-[#a29a88] text-sm">Social</h4>
            <div className="space-y-1 text-xs text-white">
              <div>LinkedIn</div>
              <div>Instagram</div>
              <div>Twitter</div>
            </div>
          </div>
        </div>

        {/* Mobile Footer - Nur 3 Touch-Ziele */}
        <div className="md:hidden mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <ConditionalMagnet padding={20} disabled={false} magnetStrength={4}>
              <a 
                href="https://wa.me/491234567890?text=Hallo! Ich interessiere mich für eine Website-Analyse."
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">WhatsApp</span>
              </a>
            </ConditionalMagnet>

            <ConditionalMagnet padding={20} disabled={false} magnetStrength={4}>
              <a 
                href="/kontakt"
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">Termin</span>
              </a>
            </ConditionalMagnet>

            <ConditionalMagnet padding={20} disabled={false} magnetStrength={4}>
              <a 
                href="tel:+491234567890"
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">Anruf</span>
              </a>
            </ConditionalMagnet>
          </div>

          {/* Social Links - sekundär auf Mobile */}
          <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-gray-700">
            <a href="https://linkedin.com/company/sparkscale" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#a29a88] transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com/sparkscale.de" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#a29a88] transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.717-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001.012.017z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter Signup - mit Mehrwert-Versprechen */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-6 text-center border border-gray-700">
          <h3 className="font-semibold text-[#a29a88] mb-2">🚀 Website-Tipps direkt in Ihr Postfach</h3>
          <p className="text-sm text-gray-300 mb-4">Monatlich: SEO-Updates, Performance-Tricks & KI-News</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ihre E-Mail Adresse"
              className="flex-1 px-4 py-2 border border-gray-600 rounded-full text-sm focus:outline-none focus:border-[#a29a88] bg-gray-700 text-white placeholder-gray-400"
            />
            <ConditionalMagnet padding={15} disabled={false} magnetStrength={4}>
              <button className="bg-[#a29a88] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#b8a896] transition-all duration-300">
                Anmelden
              </button>
            </ConditionalMagnet>
          </div>
          <p className="text-xs text-gray-400 mt-2">Kostenlos, jederzeit abbestellbar. Kein Spam.</p>
        </div>
        
        {/* Copyright & Legal */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs text-gray-400">
            <a href="#datenschutz" className="hover:text-[#a29a88] transition-colors">Datenschutz</a>
            <a href="#impressum" className="hover:text-[#a29a88] transition-colors">Impressum</a>
            <a href="#agb" className="hover:text-[#a29a88] transition-colors">AGB</a>
          </div>
          <div className="text-xs text-gray-400">
            © Spark&Scale, 2025. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}