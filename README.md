# Spark&Scale Website

> Die KI-orientierte Webagentur für KMUs & Local Champions

Eine moderne, performance-optimierte Website gebaut mit Next.js 14+, TypeScript, Tailwind CSS und GSAP Animationen.

## 🚀 Features

- ✅ **Next.js 14+** mit App Router
- ✅ **TypeScript** für Type Safety
- ✅ **Tailwind CSS** für modernes Design
- ✅ **GSAP Animationen** mit SplitText Komponente
- ✅ **ESLint + Prettier** für Code Quality
- ✅ **Husky** für Git pre-commit hooks
- ✅ **Performance-optimiert** (Core Web Vitals ready)
- ✅ **SEO-ready** Structure
- ✅ **Mobile-First** Design

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP, Framer Motion, Lottie-React, React Spring

### Development Tools
- **Linting:** ESLint + TypeScript ESLint
- **Formatting:** Prettier
- **Git Hooks:** Husky + lint-staged
- **Package Manager:** npm

## 📁 Projektstruktur

```
sparkscale-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Hauptseite
│   └── layout.tsx         # Layout
├── src/
│   ├── components/        # React Komponenten
│   │   ├── animations/    # Animation Komponenten
│   │   │   └── SplitText.tsx
│   │   └── ui/            # UI Komponenten
│   ├── hooks/             # Custom React Hooks
│   │   └── useGSAP.ts
│   ├── lib/               # Utility Libraries
│   │   └── gsap.ts        # GSAP Setup & Utils
│   ├── types/             # TypeScript Types
│   │   └── index.ts
│   └── utils/             # Utility Functions
├── public/                # Static Assets
└── package.json
```

## 🎯 Quick Start

### Voraussetzungen
- Node.js 18+
- npm

### Installation & Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Website öffnen
open http://localhost:3000
```

## 📋 Available Scripts

```bash
# Development
npm run dev          # Development Server starten

# Build & Production
npm run build        # Production Build erstellen
npm start            # Production Server starten

# Code Quality
npm run lint         # ESLint ausführen
npm run lint:fix     # ESLint mit auto-fix
npm run format       # Prettier formatieren
npm run format:check # Prettier Check
npm run type-check   # TypeScript Check
```

## 🎨 Animation Components

### SplitText Komponente
```tsx
import SplitText from '@/components/animations/SplitText';

<SplitText
  text="Hello, you!"
  delay={100}
  duration={0.6}
  stagger={0.05}
  className="text-4xl font-bold"
/>
```

**Props:**
- `text`: Text to animate
- `delay?`: Animation start delay (ms)
- `duration?`: Animation duration (s)
- `stagger?`: Stagger between words (s)
- `className?`: CSS classes

### GSAP Utilities
```tsx
import { animations } from '@/lib/gsap';

// Fade In Animation
animations.fadeIn('.element', { delay: 0.5 });

// Slide Up Animation
animations.slideUp('.element', { duration: 0.8 });

// Scale In Animation
animations.scaleIn('.element');
```

## 🔧 Development Guidelines

### Code Quality
- **80%+ Code Coverage** erforderlich
- **TypeScript strict mode** aktiviert
- **ESLint + Prettier** automatisch bei Commits
- **Conventional Commits** für Changelog

### Performance Standards
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **First Input Delay:** <100ms
- **Cumulative Layout Shift:** <0.1
- **Bundle Size:** <500KB initial load

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Roadmap Features (Phase 1-6)

### ✅ Phase -1: Pre-Development (COMPLETE)
- [x] Tech Stack Setup (Next.js + TypeScript + GSAP)
- [x] Code Quality Tools (ESLint + Prettier + Husky)
- [x] Project Structure
- [x] Animation Architecture

### 🚧 Phase 0: Foundation & Compliance (IN PROGRESS)
- [ ] DSGVO Cookie Management
- [ ] Security Headers (SSL + HSTS)
- [ ] Accessibility (WCAG 2.1 AA)

### 📋 Phase 1: Core Pages
- [ ] Hero Section mit KI-Fokus
- [ ] Service Overview
- [ ] Trust & Social Proof
- [ ] Contact Forms

### 📋 Phase 2-6: Advanced Features
- [ ] CRM Integration
- [ ] Email Automation
- [ ] Performance Monitoring
- [ ] SEO Optimization
- [ ] Content Management

## 🤝 Contributing

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Changes committen (`git commit -m 'Add amazing feature'`)
4. Branch pushen (`git push origin feature/amazing-feature`)
5. Pull Request öffnen

## 📜 License

© 2025 Spark&Scale. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ für die Zukunft des Webs**

# Deployment & Integrations

## Firebase (Firestore + Cloud Functions + Gmail)

1. Create a Firebase project and enable Firestore.
2. Add a Web App and copy the config into `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

3. Gmail App Password:
   - Activate 2FA on `spark.scale01@gmail.com`
   - Create an App Password (Mail / Windows)
   - Set functions env:

```
# Either via env variables (CI/CD):
GMAIL_USER=spark.scale01@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Or via Firebase functions config:
firebase functions:config:set gmail.user="spark.scale01@gmail.com" gmail.app_password="xxxx xxxx xxxx xxxx"
```

4. Install function deps and deploy:

```
cd functions
npm install
cd ..
firebase deploy --only functions
```

5. Form writes to Firestore:
   - MultiStepContactForm schreibt in `customers` Collection.
   - Cloud Function `notifyOnNewCustomer` versendet Admin-Mail bei neuen Einträgen.
