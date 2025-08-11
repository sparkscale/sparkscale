"use client";

import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
// Mobile-optimized: Magnet effects removed

interface ROIData {
  visitors: number;
  conversionRate: number;
  orderValue: number;
  keywords: number;
}

export default function ROICalculator() {
  const [data, setData] = useState<ROIData>({
    visitors: 2500,
    conversionRate: 1.8,
    orderValue: 850,
    keywords: 12
  });

  // Berechnungen basierend auf Roadmap-Specs
  const currentLeads = Math.round(data.visitors * (data.conversionRate / 100));
  const currentRevenue = currentLeads * data.orderValue;
  
  const trafficBoost = 2.8; // +280% laut Roadmap
  const conversionImprovement = 1.6; // +60% durch bessere UX
  
  const newTraffic = Math.round(data.visitors * trafficBoost);
  const newConversion = Math.min(data.conversionRate * conversionImprovement, 12);
  const newLeads = Math.round(newTraffic * (newConversion / 100));
  const newRevenue = newLeads * data.orderValue;
  
  const additionalLeads = newLeads - currentLeads;
  const additionalRevenue = newRevenue - currentRevenue;
  const investment = 5500; // Mittleres Paket
  const roi = Math.round(((additionalRevenue * 6 - investment) / investment) * 100);
  const breakEven = Math.max(1, Math.ceil(investment / (additionalRevenue)));

  return (
    <div className="bg-white p-6 md:p-8 w-full">
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-2">
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Ihre aktuellen Daten</h3>
              
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Website-Besucher/Monat
                </label>
                <input
                  type="number"
                  value={data.visitors === 0 ? '' : data.visitors}
                  onChange={(e) => setData({...data, visitors: e.target.value === '' ? 0 : parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a29a88] focus:border-[#a29a88] text-lg font-medium"
                  placeholder="2.500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Conversion-Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={data.conversionRate === 0 ? '' : data.conversionRate}
                  onChange={(e) => setData({...data, conversionRate: e.target.value === '' ? 0 : parseFloat(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a29a88] focus:border-[#a29a88] text-lg font-medium"
                  placeholder="1.8"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Ø Auftragswert (€)
                </label>
                <input
                  type="number"
                  value={data.orderValue === 0 ? '' : data.orderValue}
                  onChange={(e) => setData({...data, orderValue: e.target.value === '' ? 0 : parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a29a88] focus:border-[#a29a88] text-lg font-medium"
                  placeholder="850"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Target Keywords (Seite 1)
                </label>
                <input
                  type="number"
                  value={data.keywords === 0 ? '' : data.keywords}
                  onChange={(e) => setData({...data, keywords: e.target.value === '' ? 0 : parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a29a88] focus:border-[#a29a88] text-lg font-medium"
                  placeholder="12"
                />
              </div>

              {/* Lead Generation CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div padding={30} disabled={false} magnetStrength={6}>
                  <a 
                    href="/kontakt"
                    className="w-full bg-[#a29a88] text-black px-6 py-4 text-lg font-bold hover:bg-[#b8a896] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Jetzt kostenlose Analyse anfordern
                  </a>
                </div>
                <p className="text-left text-xs text-gray-500 mt-2">
                  Unverbindlich • Performance-Garantie • 24h Antwort
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Results Dashboard */}
        <div className="lg:col-span-3">
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 md:p-8 rounded-2xl text-white h-full">
              <h3 className="text-2xl font-bold mb-6 text-[#a29a88]">Ihre Potenziale nach 6 Monaten</h3>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-[#a29a88]">+{Math.round(((newTraffic - data.visitors) / data.visitors) * 100)}%</div>
                  <div className="text-sm text-gray-300">Traffic-Steigerung</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-[#a29a88]">+{additionalLeads}</div>
                  <div className="text-sm text-gray-300">Zusätzliche Leads/Monat</div>
                </div>
              </div>

              {/* ROI Highlight */}
              <div className="bg-gray-800/50 p-6 rounded-2xl mb-6 border border-gray-700">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#a29a88] mb-2">{roi}%</div>
                  <div className="text-lg font-semibold mb-4">ROI nach 6 Monaten</div>
                  <div className="text-gray-300">Break-Even: <span className="text-[#a29a88] font-bold">Monat {breakEven}</span></div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="border-t border-gray-700 pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-semibold mb-2">AKTUELL</div>
                    <div className="text-2xl font-bold mb-1">{currentLeads}</div>
                    <div className="text-xs text-gray-400 mb-2">Leads/Monat</div>
                    <div className="text-lg text-[#a29a88] font-bold">€{currentRevenue.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">Umsatz/Monat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-semibold mb-2">NACH OPTIMIERUNG</div>
                    <div className="text-2xl font-bold mb-1">{newLeads}</div>
                    <div className="text-xs text-gray-400 mb-2">Leads/Monat</div>
                    <div className="text-lg text-[#a29a88] font-bold">€{newRevenue.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">Umsatz/Monat</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* CTA Section */}
      <ScrollAnimation animation="slideUp" delay={0.4}>
        <div className="text-center mt-8 p-8 bg-gray-50 rounded-2xl border-2 border-gray-100">
          <h3 className="text-2xl font-bold text-black mb-4">
            Performance-Garantie oder Geld zurück
          </h3>
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
            90% unserer Kunden erreichen Seite 1. Starten Sie jetzt Ihre kostenlose Website-Analyse.
          </p>
          <div padding={40} disabled={false} magnetStrength={8}>
            <a 
              href="/kontakt"
              className="bg-[#a29a88] text-black px-10 py-4 text-lg font-bold hover:bg-[#b8a896] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
            >
              Kostenlose Website-Analyse starten
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}