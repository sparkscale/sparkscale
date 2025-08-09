"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ElasticSlider from './ElasticSlider';
import { HiUsers, HiTrendingUp, HiCurrencyEuro, HiSearch } from 'react-icons/hi';
import { useROICalculatorAnalytics } from '@/hooks/useAnalytics';

interface ROIData {
  currentVisitors: number;
  currentConversionRate: number;
  averageOrderValue: number;
  targetKeywords: number;
}

interface ROIResults {
  trafficIncrease: number;
  newLeadsPerMonth: number;
  roiAfter6Months: number;
  breakEvenMonth: number;
  currentRevenue: number;
  projectedRevenue: number;
  monthlyROI: number;
}

const ROICalculator: React.FC = () => {
  const [data, setData] = useState<ROIData>({
    currentVisitors: 1000,
    currentConversionRate: 2,
    averageOrderValue: 1500,
    targetKeywords: 10
  });

  // Analytics hooks
  const { trackCalculatorStart, trackCalculatorComplete, trackCalculatorStep } = useROICalculatorAnalytics();
  const [hasStarted, setHasStarted] = useState(false);

  // Track calculator start on first interaction
  useEffect(() => {
    if (!hasStarted && (data.currentVisitors !== 1000 || data.currentConversionRate !== 2 || data.averageOrderValue !== 1500 || data.targetKeywords !== 10)) {
      trackCalculatorStart();
      setHasStarted(true);
    }
  }, [data, hasStarted, trackCalculatorStart]);



  const [results, setResults] = useState<ROIResults>({
    trafficIncrease: 0,
    newLeadsPerMonth: 0,
    roiAfter6Months: 0,
    breakEvenMonth: 0,
    currentRevenue: 0,
    projectedRevenue: 0,
    monthlyROI: 0
  });

  const calculateROI = (): ROIResults => {
    const { currentVisitors, currentConversionRate, averageOrderValue, targetKeywords } = data;
    
    // Basis-Berechnungen
    const currentLeads = currentVisitors * (currentConversionRate / 100);
    const currentRevenue = currentLeads * averageOrderValue;
    
    // Traffic-Steigerung basierend auf Keywords (REALISTISCHE Werte)
    // Pro Keyword max. 15% Steigerung, aber mit abnehmenden Effekt
    const keywordEffect = targetKeywords <= 10 ? targetKeywords * 0.15 : 10 * 0.15 + (targetKeywords - 10) * 0.05;
    const trafficMultiplier = Math.min(1 + keywordEffect, 2.8); // Max 180% Steigerung statt 380%
    const trafficIncrease = Math.round((trafficMultiplier - 1) * 100);
    
    // Neue Besucher durch SEO
    const newVisitors = currentVisitors * trafficMultiplier;
    
    // Verbesserte Conversion-Rate durch Performance-Optimierung (REALISTISCH)
    // Max. 40% Verbesserung der bestehenden Rate, aber nie über 5%
    const conversionImprovement = Math.min(currentConversionRate * 0.4, 1.5);
    const improvedConversionRate = Math.min(currentConversionRate + conversionImprovement, 5);
    
    // Neue Leads berechnen
    const newLeads = newVisitors * (improvedConversionRate / 100);
    const additionalLeads = newLeads - currentLeads;
    
    // Revenue-Berechnung
    const projectedRevenue = newLeads * averageOrderValue;
    const additionalRevenue = projectedRevenue - currentRevenue;
    
    // Investment (durchschnittliches Pro-Paket)
    const investment = 5500;
    
    // ROI-Berechnungen (REALISTISCH)
    const monthlyROI = additionalRevenue > 0 ? (additionalRevenue / investment) * 100 : 0;
    const roiAfter6Months = additionalRevenue > 0 ? 
      (additionalRevenue * 6 - investment) / investment * 100 : -100;
    const breakEvenMonth = additionalRevenue > 0 ? 
      Math.ceil(investment / additionalRevenue) : 99;
    
    return {
      trafficIncrease,
      newLeadsPerMonth: Math.round(Math.max(0, additionalLeads)),
      roiAfter6Months: Math.round(Math.max(-100, roiAfter6Months)),
      breakEvenMonth: Math.min(99, Math.max(1, breakEvenMonth)),
      currentRevenue: Math.round(currentRevenue),
      projectedRevenue: Math.round(projectedRevenue),
      monthlyROI: Math.round(Math.max(0, monthlyROI))
    };
  };

  useEffect(() => {
    setResults(calculateROI());
  }, [data]);

  const handleInputChange = (field: keyof ROIData, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) || value === '') {
      setData(prev => ({
        ...prev,
        [field]: value === '' ? 0 : Math.max(0, numValue)
      }));
    }
  };

  const handleInputFocus = (field: keyof ROIData) => {
    if (data[field] === 0) {
      setData(prev => ({
        ...prev,
        [field]: '' as any
      }));
    }
  };

  const handleSliderChange = (field: keyof ROIData, value: number) => {
    setData(prev => ({
      ...prev,
      [field]: Math.max(0, value)
    }));
  };



  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('de-DE').format(num);
  };

  const formatCurrency = (num: number): string => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-black p-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">ROI-Rechner: Was bringt Ihnen eine neue Website?</h2>
          <p className="text-gray-300 text-lg">
            Berechnen Sie das Potenzial Ihrer Website-Optimierung in wenigen Sekunden
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* Input Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ihre aktuellen Zahlen</h3>
          
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Website-Besucher */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiUsers className="w-6 h-6 text-blue-600" />
                </div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Website-Besucher pro Monat
                </label>
                <input
                  type="number"
                  value={data.currentVisitors === 0 ? '' : data.currentVisitors}
                  onChange={(e) => handleInputChange('currentVisitors', e.target.value)}
                  onFocus={() => handleInputFocus('currentVisitors')}
                  placeholder="0"
                  className="text-2xl font-bold text-black mb-1 text-center bg-white border border-gray-300 outline-none w-24 px-3 py-1 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="text-xs text-gray-500">Besucher/Monat</div>
              </div>
              <div className="flex justify-center">
                <ElasticSlider
                  leftIcon={<div className="w-4 h-4 rounded-full bg-blue-400"></div>}
                  rightIcon={<div className="w-4 h-4 rounded-full bg-blue-600"></div>}
                  startingValue={100}
                  defaultValue={data.currentVisitors}
                  maxValue={50000}
                  isStepped
                  stepSize={100}
                  onValueChange={(value) => handleSliderChange('currentVisitors', value)}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>min.</span>
                <span>max.</span>
              </div>
            </motion.div>

            {/* Conversion-Rate */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiTrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Conversion-Rate
                </label>
                <div className="flex items-center justify-center mb-1">
                  <input
                    type="number"
                    value={data.currentConversionRate === 0 ? '' : data.currentConversionRate}
                    onChange={(e) => handleInputChange('currentConversionRate', e.target.value)}
                    onFocus={() => handleInputFocus('currentConversionRate')}
                    placeholder="0"
                    className="text-2xl font-bold text-black text-center bg-white border border-gray-300 outline-none w-16 px-2 py-1 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-2xl font-bold text-black">%</span>
                </div>
                <div className="text-xs text-gray-500">Prozent</div>
              </div>
              <div className="flex justify-center">
                <ElasticSlider
                  leftIcon={<div className="w-4 h-4 rounded-full bg-green-400"></div>}
                  rightIcon={<div className="w-4 h-4 rounded-full bg-green-600"></div>}
                  startingValue={0.5}
                  defaultValue={data.currentConversionRate}
                  maxValue={10}
                  isStepped
                  stepSize={0.1}
                  onValueChange={(value) => handleSliderChange('currentConversionRate', value)}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>min.</span>
                <span>max.</span>
              </div>
            </motion.div>

            {/* Durchschnittlicher Auftragswert */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
                <div className="text-center mb-6">
                <div className="w-12 h-12 bg-[#a29a88]\/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiCurrencyEuro className="w-6 h-6 text-[#a29a88]" />
                </div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Auftragswert
                </label>
                <div className="flex items-center justify-center mb-1">
                  <input
                    type="number"
                    value={data.averageOrderValue === 0 ? '' : data.averageOrderValue}
                    onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                    onFocus={() => handleInputFocus('averageOrderValue')}
                    placeholder="0"
                    className="text-2xl font-bold text-black text-center bg-white border border-gray-300 outline-none w-24 px-3 py-1 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-2xl font-bold text-black">€</span>
                </div>
                <div className="text-xs text-gray-500">pro Auftrag</div>
              </div>
              <div className="flex justify-center">
                <ElasticSlider
                  leftIcon={<div className="w-4 h-4 rounded-full bg-[#a29a88]\/60"></div>}
                  rightIcon={<div className="w-4 h-4 rounded-full bg-[#a29a88]"></div>}
                  startingValue={100}
                  defaultValue={data.averageOrderValue}
                  maxValue={10000}
                  isStepped
                  stepSize={100}
                  onValueChange={(value) => handleSliderChange('averageOrderValue', value)}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>min.</span>
                <span>max.</span>
              </div>
            </motion.div>

            {/* Target Keywords */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiSearch className="w-6 h-6 text-purple-600" />
                </div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ziel-Keywords
                </label>
                <input
                  type="number"
                  value={data.targetKeywords === 0 ? '' : data.targetKeywords}
                  onChange={(e) => handleInputChange('targetKeywords', e.target.value)}
                  onFocus={() => handleInputFocus('targetKeywords')}
                  placeholder="0"
                  className="text-2xl font-bold text-black mb-1 text-center bg-white border border-gray-300 outline-none w-24 px-3 py-1 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="text-xs text-gray-500">Keywords</div>
              </div>
              <div className="flex justify-center">
                <ElasticSlider
                  leftIcon={<div className="w-4 h-4 rounded-full bg-purple-400"></div>}
                  rightIcon={<div className="w-4 h-4 rounded-full bg-purple-600"></div>}
                  startingValue={5}
                  defaultValue={data.targetKeywords}
                  maxValue={50}
                  isStepped
                  stepSize={1}
                  onValueChange={(value) => handleSliderChange('targetKeywords', value)}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>min.</span>
                <span>max.</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ihr Potenzial</h3>
          
          <div className="space-y-6">
            {/* Traffic Increase */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-700">Traffic-Steigerung</h4>
                  <p className="text-3xl font-bold text-green-600">
                    +{results.trafficIncrease}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* New Leads */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-700">Zusätzliche Leads/Monat</h4>
                  <p className="text-3xl font-bold text-blue-600">
                    +{formatNumber(results.newLeadsPerMonth)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Monthly ROI */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-700">Monatlicher ROI</h4>
                  <p className="text-3xl font-bold text-purple-600">
                    {results.monthlyROI}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Break Even */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-700">Break-Even</h4>
                  <p className="text-3xl font-bold text-orange-600">
                    Monat {results.breakEvenMonth}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Revenue Comparison */}
            <div className="bg-gray-800 p-6 rounded-xl text-white">
              <h4 className="font-semibold mb-4">Revenue-Vergleich (monatlich)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-gray-300 text-sm">Aktuell</p>
                  <p className="text-2xl font-bold">{formatCurrency(results.currentRevenue)}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 text-sm">Projiziert</p>
                  <p className="text-2xl font-bold">{formatCurrency(results.projectedRevenue)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Bereit, Ihr Potenzial zu realisieren?
        </h3>
        <p className="text-gray-300 mb-6">
          Lassen Sie uns gemeinsam eine Website erstellen, die diese Zahlen Realität werden lässt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/kontakt"
            className="bg-black text-[#a29a88] px-8 py-4 rounded-full font-bold hover:bg-gray-800 hover:text-white hover:shadow-lg transition-all duration-300 group"
            style={{display: 'inline-block'}}
          >
            <span className="text-[#a29a88] group-hover:text-white transition-colors duration-300">
              Kostenlose Analyse starten
            </span>
          </a>
          <a
            href="/preise"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Pakete ansehen
          </a>
        </div>
        
        <div className="mt-6 text-sm text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Performance-Garantie oder Geld zurück
          </div>
        </div>
      </div>


    </div>
  );
};

export default ROICalculator;