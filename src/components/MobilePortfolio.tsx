"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MobilePortfolio: React.FC = () => {
  const projects = [
    {
      title: "Rechtsanwaltskanzlei Schmidt",
      category: "Local SEO",
      subtitle: "Familienrecht, München",
      result: "+450% Anfragen",
      metrics: [
        { label: "Rankings", value: "Top 3" },
        { label: "Mandatsanfragen", value: "8 → 44" },
        { label: "ROI", value: "280%" }
      ],
      challenge: "Die Kanzlei war bei lokalen Suchanfragen praktisch unsichtbar. Trotz 15 Jahren Erfahrung rankte sie auf Seite 2-3 für wichtige Keywords wie \"Fachanwalt Familienrecht München\".",
      solution: "Local SEO Optimierung + Mobile-First Design + Core Web Vitals + Content-Strategie",
      icon: "⚖️"
    },
    {
      title: "Zahnarztpraxis Dr. Weber",
      category: "Performance",
      subtitle: "Implantologie, Hamburg",
      result: "Seite 1",
      metrics: [
        { label: "Position", value: "Seite 4 → 1" },
        { label: "Termine", value: "+280%" },
        { label: "Follower", value: "0 → 2.400" }
      ],
      challenge: "Spezialisiert auf Implantologie, aber bei \"Zahnimplantate Hamburg\" auf Seite 4. Online-Terminbuchungen waren praktisch nicht vorhanden.",
      solution: "SEO-Optimierung + Social Media Marketing + Online-Terminbuchung + Performance-Optimierung",
      icon: "🦷"
    },
    {
      title: "Steuerberatung Müller & Partner",
      category: "SEO Authority", 
      subtitle: "Unternehmensberatung, Berlin",
      result: "+520% Mandanten",
      metrics: [
        { label: "Keywords", value: "35 Top 10" },
        { label: "Traffic", value: "+520%" },
        { label: "Mandanten", value: "+280%" }
      ],
      challenge: "Konkurrenz dominierte alle wichtigen Keywords. Trotz Expertise war die Online-Sichtbarkeit minimal.",
      solution: "Content-Strategie + Technical SEO + E-A-T Optimierung + Authority Building",
      icon: "📊"
    },
    {
      title: "E-Commerce Fashion Store",
      category: "Performance & Conversion",
      subtitle: "Online-Shop, deutschlandweit",
      result: "+340% Umsatz",
      metrics: [
        { label: "Conversion", value: "+180%" },
        { label: "Umsatz", value: "+340%" },
        { label: "Speed", value: "1.2s" }
      ],
      challenge: "Hohe Absprungrate durch langsame Ladezeiten und schlechte Mobile-Experience. Conversion-Rate unter 1%.",
      solution: "Performance-Optimierung + UX-Redesign + Mobile-First + Conversion-Optimierung",
      icon: "🛍️"
    }
  ];

  return (
    <div className="md:hidden">
      <div className="px-4 py-8 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">Erfolgsgeschichten</h2>
          <p className="text-gray-600">Echte Ergebnisse unserer Kunden</p>
        </div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{project.icon}</span>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {project.category}
                  </div>
                  <h3 className="font-semibold text-black text-sm leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{project.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-[#a29a88]">
                  {project.result.split(' ')[0]}
                </div>
                <div className="text-xs text-gray-500">
                  {project.result.split(' ').slice(1).join(' ')}
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-1">Problem:</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-1">Lösung:</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Results Grid */}
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-500 mb-2 font-medium">Ergebnisse:</div>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-bold text-black text-sm">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <div className="text-center pt-6">
          <a
            href="/kontakt"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
          >
            Ähnliche Ergebnisse erzielen
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobilePortfolio;