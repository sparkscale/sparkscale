"use client";

// Mobile-optimized: Magnet effects removed

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

        {/* Newsletter Coming Soon */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-6 text-center border border-gray-700">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="font-semibold text-[#a29a88]">Newsletter Coming Soon</h3>
          </div>
          <p className="text-sm text-gray-300 mb-4">Wir arbeiten an wertvollen Inhalten für Ihren Postfach.<br/>SEO-Updates, Performance-Tricks & KI-News in Vorbereitung.</p>
          <div className="max-w-md mx-auto">
            <button 
              disabled 
              className="bg-gray-600 text-gray-400 px-6 py-2 rounded-full text-sm font-semibold cursor-not-allowed opacity-60"
            >
              Bald verfügbar
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">Folgen Sie uns für Updates oder kontaktieren Sie uns direkt.</p>
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