"use client";

import PerformanceMonitor from "@/components/PerformanceMonitor";
import CustomCursor from "@/components/CustomCursor";

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Live Performance Dashboard
          </h1>
          <p className="text-gray-600 mb-8">
            Messung der Core Web Vitals in Echtzeit (client-seitig, gerätespezifisch).
          </p>
          <PerformanceMonitor />
        </div>
      </section>
    </div>
  );
}