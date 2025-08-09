// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: {
    starter: number;
    pro: number;
    enterprise: number;
  };
}

// Case Study types
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'local' | 'kmu' | 'ecommerce';
  description: string;
  image: string;
  results: {
    metric: string;
    improvement: string;
  }[];
  technologies: string[];
  url?: string;
}

// Contact types
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
  budget?: string;
}

// Lead types
export interface Lead extends ContactForm {
  id: string;
  source: 'organic' | 'ads' | 'social' | 'referral' | 'direct';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  structuredData?: any;
}

// Performance types
export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
  score: number; // Overall score
} 