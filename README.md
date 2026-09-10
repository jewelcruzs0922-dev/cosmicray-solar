# Cosmic Ray Solar

> A full-stack solar energy company website with e-commerce, appointment scheduling, and interactive quote estimation.

**Live Demo:** [cosmicraysolar.netlify.app](https://cosmicraysolar.netlify.app)

## Overview

Cosmic Ray Solar is a commercial website for a solar energy installation company operating across 15 US states. Built with Next.js 16, it features a product shop with Stripe checkout, interactive savings calculator, appointment scheduling, blog, and service area pages.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **CMS:** Sanity (headless)
- **Payments:** Stripe checkout
- **Styling:** PostCSS + CSS custom properties
- **Animations:** Framer Motion
- **Forms:** Zod validation + Formspree
- **Testing:** Vitest (unit) + Playwright (e2e)
- **Monitoring:** Sentry
- **Deployment:** Netlify

## Key Features

### E-Commerce
- Product shop with 20+ solar panels
- Stripe checkout integration
- Cart with localStorage persistence
- Cart context with SSR-safe hydration

### Interactive Quote Estimator
- Real-time savings calculator with range slider
- Roof type selection (residential, commercial, flat)
- Three scenario comparisons (Conservative, Moderate, Aggressive)
- Dynamic cost breakdown with federal tax credit

### SEO & Structured Data
- JSON-LD schemas: SolarEnergyService, WebSite, FAQPage, Organization
- Dynamic sitemap with 21+ routes
- OpenGraph images per page
- Canonical URLs on every page

### Content
- Blog with 4 articles (solar tax credits, cost guides, EV charging, battery storage)
- Service area pages for 15 US states with dynamic city routing
- Case studies and project showcases

### Performance
- `next/image` with AVIF/WebP optimization
- Dynamic imports with skeleton loading states
- `prefers-reduced-motion` support
- Font preloading with `display: "swap"`

### Accessibility
- Skip-to-content link
- ARIA labels, `aria-expanded`, `aria-live` regions
- Keyboard-navigable carousel and FAQ
- Semantic HTML throughout

### Security
- Content-Security-Policy headers
- Strict-Transport-Security (HSTS)
- Permissions-Policy
- CORS configuration

## Project Structure

```
src/
├── app/                    # 19 page routes + 5 API routes
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── blog/               # Blog with 4 articles
│   ├── shop/               # Product shop
│   ├── contact/            # Contact form
│   ├── schedule/           # Appointment booking
│   ├── service-areas/      # Dynamic city pages
│   ├── case-studies/       # Project showcases
│   ├── financing/          # Financing options
│   ├── checkout/           # Stripe success/cancel
│   └── api/                # 5 API routes
├── components/
│   ├── Header.tsx          # Navigation with cart
│   ├── Footer.tsx          # 4-column footer
│   ├── CartContext.tsx      # Cart state management
│   ├── Toast.tsx           # Notification system
│   └── home/               # 10 homepage sections
├── data/                   # Typed data files
├── hooks/                  # Custom React hooks
├── lib/                    # Constants, Sanity client, validations
└── types/                  # TypeScript definitions
```

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Run tests
npm run test

# Run e2e tests
npx playwright test

# Build for production
npm run build
```

## Environment Variables

Required:
- `NEXT_PUBLIC_SITE_URL` — Site URL
- `STRIPE_SECRET_KEY` — Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Stripe publishable key
- `SANITY_PROJECT_ID` — Sanity project ID
- `SANITY_API_TOKEN` — Sanity API token

Optional:
- `NEXT_PUBLIC_TAWK_TO_PROPERTY_ID` — Tawk.to chat
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics
- `SENTRY_DSN` — Sentry error tracking

## Author

[Your Name] — [Your LinkedIn] — [Your GitHub]

## License

MIT
