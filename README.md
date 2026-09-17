# Cosmic Ray Solar

A multi-page marketing site for a solar installer — built to practise production Next.js: App Router routing, SEO, accessibility, testing, and CI.

**Live:** https://cosmicray-solar.netlify.app

## Highlights

- **19 routes**, including a shop, a blog (4 posts), case studies, and service-area pages with **6 statically generated city pages**
- **Cart** with `localStorage` persistence and SSR-safe hydration
- **Quote estimator** — an interactive savings calculator with roof types and three scenarios
- **59 unit tests** (Vitest), plus a Playwright end-to-end and visual-regression suite
- **CI** — lint + typecheck, unit tests, build, and e2e (`.github/workflows/ci.yml`)
- **Service worker** for offline caching; homepage sections are `next/dynamic` with skeleton fallbacks and wrapped in per-section error boundaries
- **SEO** — JSON-LD, a 22-entry dynamic sitemap, and a generated Open Graph image (`opengraph-image.tsx`)

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Framer Motion · Zod · Formspree (forms) · Vitest + Playwright · Netlify

## Accessibility

Skip link, semantic landmarks, focus traps and Escape handling in the search / cookie / exit-intent / mobile-nav overlays, `inert` on the closed mobile nav, labelled form fields, and reduced-motion support across the animated components.

## Not included (roadmap)

Stated plainly so the repo matches reality:

- **Stripe checkout** — the server route is scaffolded (`src/app/api/checkout/route.ts`), but the cart's checkout button currently routes to the scheduler and there is no webhook yet.
- **Sanity CMS** — a client stub exists (`src/lib/sanity.ts`); content is currently served from typed modules in `src/data/`.
- **Appointment API** — `/api/schedule` validates and returns an echo; nothing is persisted.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
npm test             # 59 unit tests
npm run test:e2e     # Playwright
npm run build
```

## Environment

```
# Forms (required for contact + newsletter)
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=
NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID=

# Site URL
NEXT_PUBLIC_SITE_URL=

# Optional
NEXT_PUBLIC_GA_ID=          NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_TAWK_PROPERTY_ID=   NEXT_PUBLIC_TAWK_WIDGET_ID=
NEXT_PUBLIC_SENTRY_DSN=
```

## Structure

```
src/
├── app/                 # 19 page routes + 5 API routes
│   ├── page.tsx         # homepage (server) + ClientHome
│   ├── shop/ blog/ projects/ case-studies/ financing/
│   ├── service-areas/[city]/   # 6 statically generated pages
│   ├── contact/ schedule/ checkout/
│   └── api/             # checkout, contact, estimate, health, schedule
├── components/          # ~35 components, incl. home/ sections
├── data/                # 11 typed content modules
├── hooks/               # form hooks
└── lib/                 # constants, validations, sanity client
```

## License

MIT
