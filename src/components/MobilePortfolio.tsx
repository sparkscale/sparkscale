"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MobilePortfolio: React.FC = () => {
  const projects = [
    {
      title: "Anwaltskanzlei München",
      category: "Local SEO",
      result: "+450% Anfragen",
      metrics: [
        { label: "Rankings", value: "Top 3" },
        { label: "Traffic", value: "+280%" },
        { label: "Leads", value: "+450%" }
      ],
      challenge: "Kanzlei war bei lokalen Suchanfragen unsichtbar.",
      solution: "Local SEO + Mobile-First Design + Core Web Vitals",
      icon: "⚖️"
    },
    {
      title: "Zahnarztpraxis Berlin",
      category: "Performance",
      result: "+340% Termine",
      metrics: [
        { label: "Speed", value: "0.8s" },
        { label: "Termine", value: "+340%" },
        { label: "Score", value: "98/100" }
      ],
      challenge: "Website lud 4 Sekunden - Patienten sprangen ab.",
      solution: "Performance-Optimierung + Terminbuchung + UX",
      icon: "🦷"
    },
    {
      title: "Steuerberatung Hamburg",
      category: "SEO Authority",
      result: "+520% Mandanten",
      metrics: [
        { label: "Keywords", value: "35 Top 10" },
        { label: "Traffic", value: "+520%" },
        { label: "Mandanten", value: "+280%" }
      ],
      challenge: "Konkurrenz dominierte alle wichtigen Keywords.",
      solution: "Content-Strategie + Technical SEO + E-A-T",
      icon: "📊"
    },
    {
      title: "Immobilienmakler Köln",
      category: "Local Dominance",
      result: "+680% Leads",
      metrics: [
        { label: "Sichtbarkeit", value: "+890%" },
        { label: "Anrufe", value: "+680%" },
        { label: "Verkäufe", value: "+45%" }
      ],
      challenge: "Große Portale überdeckten lokale Präsenz.",
      solution: "Local Citations + GMB + Bewertungsmanagement",
      icon: "🏠"
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