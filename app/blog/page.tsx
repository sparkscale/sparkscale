"use client";

import ScrollAnimation from '@/components/ScrollAnimation';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Core Web Vitals 2025: Complete Guide für bessere Performance",
      excerpt: "Alles was Sie über die neuen Core Web Vitals wissen müssen. LCP, FID und CLS optimieren für Top-Rankings.",
      category: "Performance",
      readTime: "8 min",
      date: "15. Dezember 2024",
      featured: true,
      image: "/blog/core-web-vitals.jpg"
    },
    {
      id: 2,
      title: "Local SEO: So dominieren Sie Ihre Region",
      excerpt: "Mit diesen Strategien werden Sie zur #1 in Google Maps und lokalen Suchergebnissen.",
      category: "SEO",
      readTime: "6 min",
      date: "10. Dezember 2024",
      featured: true,
      image: "/blog/local-seo.jpg"
    },
    {
      id: 3,
      title: "KI-Suche vs Google: Was ändert sich für Websites?",
      excerpt: "ChatGPT, Perplexity und Co. verändern die Suche. So bereiten Sie Ihre Website vor.",
      category: "Trends",
      readTime: "7 min",
      date: "5. Dezember 2024",
      featured: false,
      image: "/blog/ai-search.jpg"
    },
    {
      id: 4,
      title: "Performance-Optimierung: Von 4s auf 0.8s",
      excerpt: "Case Study: Wie wir eine E-Commerce Website um 400% beschleunigt haben.",
      category: "Case Study",
      readTime: "10 min",
      date: "28. November 2024",
      featured: false,
      image: "/blog/performance-case.jpg"
    },
    {
      id: 5,
      title: "Website-Relaunch: Checkliste für 2025",
      excerpt: "15 Punkte die Sie beim Website-Relaunch beachten müssen, um Traffic zu behalten.",
      category: "Guide",
      readTime: "5 min",
      date: "22. November 2024",
      featured: false,
      image: "/blog/relaunch-guide.jpg"
    },
    {
      id: 6,
      title: "Mobile-First Indexing: Optimierung für 2025",
      excerpt: "Google indexiert nur noch mobile Versionen. So optimieren Sie richtig.",
      category: "SEO",
      readTime: "6 min",
      date: "18. November 2024",
      featured: false,
      image: "/blog/mobile-first.jpg"
    }
  ];

  const categories = ["Alle", "Performance", "SEO", "Trends", "Case Study", "Guide"];

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
              <a href="/roi-rechner" className="text-gray-600 hover:text-black transition-colors">ROI-Rechner</a>
              <a href="/blog" className="text-black font-semibold">Blog</a>
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
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Performance & SEO <span className="text-gray-300">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Praxiserprobte Strategien, Case Studies und Trends für bessere Website-Performance und höhere Rankings.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Praxiserprobte Strategien
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Echte Case Studies
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Wöchentlich neue Inhalte
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-8 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-[#a29a88] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured <span className="text-[#a29a88]">Articles</span>
              </h2>
              <p className="text-lg text-gray-600">
                Die wichtigsten Insights für Ihre Website-Performance
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.15}>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#a29a88]/20 to-gray-900/40"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#a29a88] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} Lesezeit</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a29a88] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div>
                      <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#a29a88] font-semibold hover:gap-3 transition-all duration-300">
                        Artikel lesen
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Alle <span className="text-[#a29a88]">Artikel</span>
              </h2>
              <p className="text-lg text-gray-600">
                Durchsuchen Sie unser komplettes Archiv
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="staggerUp" delay={0.3} stagger={0.1}>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#a29a88]/10 to-gray-900/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#a29a88] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div>
                      <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#a29a88] font-medium text-sm hover:gap-3 transition-all duration-300">
                        Weiterlesen
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Verpassen Sie keine <span className="text-[#a29a88]">Insights</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Erhalten Sie wöchentlich die neuesten Performance-Tipps und SEO-Strategien direkt in Ihr Postfach.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a29a88]"
              />
              <div>
                <button className="bg-[#a29a88] text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all duration-300">
                  Anmelden
                </button>
              </div>
            </div>
            
            <p className="text-sm text-gray-400">
              Kostenlos • Jederzeit kündbar • Kein Spam
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}



