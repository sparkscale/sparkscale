"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactFormAnalytics } from '@/hooks/useAnalytics';
// import { createCustomer } from '@/services/customerService'; // Moved to API route
import SuccessModal from './SuccessModal';

interface FormData {
  projektArt: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  unternehmen: string;
  nachricht: string;
}

interface MultiStepContactFormProps {
  onSubmit?: (data: FormData & { leadScore: number }) => void;
}

const MultiStepContactForm: React.FC<MultiStepContactFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projektArt: [],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    unternehmen: '',
    nachricht: ''
  });

  // Analytics hooks
  const { trackFormStep, trackFormAbandonment } = useContactFormAnalytics();
  const [startTime] = useState(Date.now());

  // Track form start
  useEffect(() => {
    trackFormStep(1, formData);
  }, []);

  // Track step changes
  useEffect(() => {
    if (currentStep > 1) {
      trackFormStep(currentStep, formData);
    }
  }, [currentStep, formData, trackFormStep]);

  const projektOptionen = [
    { id: 'website', label: 'Neue Website', score: 20 },
    { id: 'redesign', label: 'Website-Redesign', score: 15 },
    { id: 'seo', label: 'SEO-Optimierung', score: 25 },
    { id: 'performance', label: 'Performance-Optimierung', score: 30 },
    { id: 'local-seo', label: 'Local SEO', score: 20 },
    { id: 'wartung', label: 'Wartung & Pflege', score: 10 }
  ];

  const budgetOptionen = [
    { id: 'starter', label: '2.500€ - Starter Paket', score: 10 },
    { id: 'pro', label: '5.500€ - Pro Paket', score: 25 },
    { id: 'enterprise', label: '9.500€+ - Enterprise', score: 40 },
    { id: 'unsicher', label: 'Ich bin unsicher', score: 5 }
  ];

  const timelineOptionen = [
    { id: 'sofort', label: 'Sofort starten', score: 30 },
    { id: '1monat', label: 'Innerhalb 1 Monat', score: 20 },
    { id: '3monate', label: 'In den nächsten 3 Monaten', score: 10 },
    { id: 'unbestimmt', label: 'Zeitpunkt noch unbestimmt', score: 5 }
  ];

  const calculateLeadScore = (): number => {
    let score = 0;
    
    // Projekt-Art Score
    formData.projektArt.forEach(art => {
      const option = projektOptionen.find(opt => opt.id === art);
      if (option) score += option.score;
    });

    // Budget Score
    const budgetOption = budgetOptionen.find(opt => opt.id === formData.budget);
    if (budgetOption) score += budgetOption.score;

    // Timeline Score
    const timelineOption = timelineOptionen.find(opt => opt.id === formData.timeline);
    if (timelineOption) score += timelineOption.score;

    // Email & Phone bonus
    if (formData.email) score += 10;
    if (formData.phone) score += 10;
    if (formData.unternehmen) score += 15;

    return Math.min(score, 100); // Max 100 Punkte
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting || hasSubmitted) return;
    setIsSubmitting(true);
    try {
      const leadScore = calculateLeadScore();
      const payload = { ...formData, leadScore } as any;

      // API call to server
              const response = await fetch('/api/create-customer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.details || errorData.error || `HTTP ${response.status}`);
        }
        const result = await response.json();
      console.log('Customer created with ID:', result.id);

      if (onSubmit) {
        onSubmit({ ...formData, leadScore });
      }

      // Success state
      setHasSubmitted(true);
      setShowSuccessModal(true);
    } catch (err) {
      console.error('Error creating customer:', err);
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Optional: Reset form or redirect
  };

  const toggleProjektArt = (id: string) => {
    setFormData(prev => ({
      ...prev,
      projektArt: prev.projektArt.includes(id) 
        ? prev.projektArt.filter(art => art !== id)
        : [...prev.projektArt, id]
    }));
  };

  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1: return formData.projektArt.length > 0;
      case 2: return formData.budget !== '';
      case 3: return formData.timeline !== '';
      case 4: return formData.name !== '' && formData.email !== '';
      default: return false;
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header mit Progress */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Kostenlose Website-Analyse</h2>
          <span className="text-[#a29a88] font-semibold">Schritt {currentStep}/4</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div 
            className="bg-[#a29a88] h-2 rounded-full"
            initial={{ width: "25%" }}
            animate={{ width: `${(currentStep / 4) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {/* Schritt 1: Projekt-Art */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Was können wir für Sie optimieren?
              </h3>
              <p className="text-gray-600 mb-6">Wählen Sie alle zutreffenden Bereiche aus:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projektOptionen.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleProjektArt(option.id)}
                    className={`p-4 border-2 rounded-xl text-left transition-all ${
                      formData.projektArt.includes(option.id)
                        ? 'border-[#a29a88] bg-[#a29a88]/10 text-[#6b6659]'
                        : 'border-gray-200 hover:border-[#a29a88] hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold">{option.label}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Schritt 2: Budget */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Welches Budget haben Sie eingeplant?
              </h3>
              <p className="text-gray-600 mb-6">Damit wir Ihnen das passende Paket vorschlagen können:</p>
              
              <div className="space-y-4">
                {budgetOptionen.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData(prev => ({ ...prev, budget: option.id }))}
                    className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                      formData.budget === option.id
                        ? 'border-[#a29a88] bg-[#a29a88]/10 text-[#6b6659]'
                        : 'border-gray-200 hover:border-[#a29a88] hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold">{option.label}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Schritt 3: Timeline */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Wann möchten Sie starten?
              </h3>
              <p className="text-gray-600 mb-6">Je nach Zeitplan können wir Ihnen verschiedene Optionen anbieten:</p>
              
              <div className="space-y-4">
                {timelineOptionen.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData(prev => ({ ...prev, timeline: option.id }))}
                    className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                      formData.timeline === option.id
                        ? 'border-[#a29a88] bg-[#a29a88]/10 text-[#6b6659]'
                        : 'border-gray-200 hover:border-[#a29a88] hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold">{option.label}</div>
                    {option.id === 'sofort' && (
                      <div className="text-sm text-[#a29a88] mt-1">🔥 Begrenzte Kapazität - nur 5 Plätze/Monat</div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Schritt 4: Kontaktdaten */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Fast geschafft! Ihre Kontaktdaten:
              </h3>
              <p className="text-gray-600 mb-6">Wir senden Ihnen Ihre persönliche Website-Analyse zu:</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ihr Name *"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Unternehmen"
                    value={formData.unternehmen}
                    onChange={(e) => setFormData(prev => ({ ...prev, unternehmen: e.target.value }))}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="E-Mail Adresse *"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Telefon (optional - für schnellere Bearbeitung)"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none"
                />
                
                <textarea
                  placeholder="Besondere Wünsche oder Fragen? (optional)"
                  value={formData.nachricht}
                  onChange={(e) => setFormData(prev => ({ ...prev, nachricht: e.target.value }))}
                  rows={4}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#a29a88] focus:outline-none resize-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Zurück
          </button>

          {currentStep < 4 ? (
              <button
              onClick={handleNext}
              disabled={!isStepValid()}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  isStepValid()
                    ? 'bg-[#a29a88] text-white hover:brightness-110 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              Weiter
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting || hasSubmitted}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                isStepValid() && !isSubmitting && !hasSubmitted
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {hasSubmitted ? 'Gesendet ✓' : isSubmitting ? 'Wird gesendet…' : 'Analyse erhalten 🚀'}
            </button>
          )}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            100% kostenlos • Keine Verpflichtungen • DSGVO-konform
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={handleModalClose} />
    </div>
  );
};

export default MultiStepContactForm;