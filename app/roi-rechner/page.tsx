"use client";

import { useState, useEffect } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
// Mobile-optimized: Magnet effects removed

import CustomCursor from '@/components/CustomCursor';
import MobileMenu from '@/components/MobileMenu';
import ROICalculator from '@/components/ROICalculator';
import Footer from '@/components/Footer';
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

export default function ROIRechnerPage() {
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
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "Leistungen",
      link: "/leistungen",
      icon: <IconBriefcase className="h-4 w-4" />,
    },
    {
      name: "Portfolio", 
      link: "/portfolio",
      icon: <IconPhoto className="h-4 w-4" />,
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



      {/* ROI Calculator - Clean Full Page */}
      <section className="pt-32 pb-24 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          
          <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="text-center mb-16 px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#a29a88]">
              ROI-Rechner
            </h1>
            <p className="text-xl md:text-2xl text-[#a29a88] max-w-4xl mx-auto mb-8">
              Berechnen Sie das Potenzial Ihrer Website mit unserer <span className="text-[#a29a88] font-semibold">Performance-Garantie</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Performance-Garantie oder Geld zurück
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                90% unserer Kunden erreichen Seite 1
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#a29a88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Antwort in 24 Stunden
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="slideUp" delay={0.4}>
          <ROICalculator />
          </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}



