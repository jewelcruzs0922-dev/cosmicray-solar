import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Cosmic Ray Solar serves homeowners across 15 states. Find solar installation services in your city — free assessments, expert installation, and 25-year warranties.",
  openGraph: {
    title: "Service Areas | Cosmic Ray Solar",
    description:
      "Solar installation services across 15 states. Find your city.",
    type: "website",
    url: `${SITE_URL}/service-areas`,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Service Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Cosmic Ray Solar",
    description:
      "Cosmic Ray Solar serves 15 states across the USA. Find solar installation services near you.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: `${SITE_URL}/service-areas`,
  },
};

const serviceAreasJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cosmic Ray Solar Service Areas",
  description:
    "Professional solar installation services across 15 states in the USA.",
  url: `${SITE_URL}/service-areas`,
  numberOfItems: 15,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "California" },
    { "@type": "ListItem", position: 2, name: "Texas" },
    { "@type": "ListItem", position: 3, name: "Arizona" },
    { "@type": "ListItem", position: 4, name: "Colorado" },
    { "@type": "ListItem", position: 5, name: "Florida" },
    { "@type": "ListItem", position: 6, name: "Nevada" },
    { "@type": "ListItem", position: 7, name: "Oregon" },
    { "@type": "ListItem", position: 8, name: "Washington" },
    { "@type": "ListItem", position: 9, name: "Utah" },
    { "@type": "ListItem", position: 10, name: "New Mexico" },
    { "@type": "ListItem", position: 11, name: "North Carolina" },
    { "@type": "ListItem", position: 12, name: "Georgia" },
    { "@type": "ListItem", position: 13, name: "Virginia" },
    { "@type": "ListItem", position: 14, name: "Illinois" },
    { "@type": "ListItem", position: 15, name: "New York" },
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreasJsonLd),
        }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumbs__inner">
          <ol className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumbs__item" aria-current="page">
              Service Areas
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="sa-hero">
        <div className="sa-hero__inner">
          <h1 className="heading-xl heading-xl--light">Our Service Areas</h1>
          <p>
            Cosmic Ray Solar provides professional solar installations across 15
            states. Find your city and get a free home assessment today.
          </p>
        </div>
      </section>

      {/* States Grid */}
      <section className="sa-section">
        <div className="sa-section__inner">
          <div className="sa-section__header">
            <span className="label">Where We Operate</span>
            <h2 className="heading-xl">Serving Homeowners Nationwide</h2>
            <p className="subheading" style={{ margin: "0 auto" }}>
              We&apos;re expanding rapidly. Don&apos;t see your city?{" "}
              <Link
                href="/schedule"
                style={{
                  color: "var(--color-primary)",
                  textDecoration: "underline",
                }}
              >
                Contact us
              </Link>{" "}
              — we may already serve your area.
            </p>
          </div>

          <div className="sa-states">
            {/* California */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                California
              </div>
              <div className="sa-state__count">480+ homes powered</div>
              <div className="sa-state__cities">
                <Link
                  href="/service-areas/los-angeles"
                  className="sa-city-link"
                >
                  Los Angeles
                </Link>
                <Link
                  href="/service-areas/san-diego"
                  className="sa-city-link"
                >
                  San Diego
                </Link>
                <span className="sa-city-link">San Francisco</span>
                <span className="sa-city-link">Sacramento</span>
                <span className="sa-city-link">San Jose</span>
                <span className="sa-city-link">Fresno</span>
              </div>
            </div>

            {/* Texas */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Texas
              </div>
              <div className="sa-state__count">320+ homes powered</div>
              <div className="sa-state__cities">
                <Link href="/service-areas/austin" className="sa-city-link">
                  Austin
                </Link>
                <span className="sa-city-link">Dallas</span>
                <span className="sa-city-link">Houston</span>
                <span className="sa-city-link">San Antonio</span>
                <span className="sa-city-link">Fort Worth</span>
              </div>
            </div>

            {/* Arizona */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Arizona
              </div>
              <div className="sa-state__count">280+ homes powered</div>
              <div className="sa-state__cities">
                <Link href="/service-areas/phoenix" className="sa-city-link">
                  Phoenix
                </Link>
                <span className="sa-city-link">Tucson</span>
                <span className="sa-city-link">Tempe</span>
                <span className="sa-city-link">Mesa</span>
                <span className="sa-city-link">Scottsdale</span>
              </div>
            </div>

            {/* Colorado */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Colorado
              </div>
              <div className="sa-state__count">180+ homes powered</div>
              <div className="sa-state__cities">
                <Link href="/service-areas/denver" className="sa-city-link">
                  Denver
                </Link>
                <span className="sa-city-link">Colorado Springs</span>
                <span className="sa-city-link">Boulder</span>
                <span className="sa-city-link">Aurora</span>
              </div>
            </div>

            {/* Florida */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Florida
              </div>
              <div className="sa-state__count">210+ homes powered</div>
              <div className="sa-state__cities">
                <Link href="/service-areas/miami" className="sa-city-link">
                  Miami
                </Link>
                <span className="sa-city-link">Orlando</span>
                <span className="sa-city-link">Tampa</span>
                <span className="sa-city-link">Jacksonville</span>
                <span className="sa-city-link">Fort Lauderdale</span>
              </div>
            </div>

            {/* Nevada */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Nevada
              </div>
              <div className="sa-state__count">150+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">Las Vegas</span>
                <span className="sa-city-link">Reno</span>
                <span className="sa-city-link">Henderson</span>
              </div>
            </div>

            {/* Oregon */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Oregon
              </div>
              <div className="sa-state__count">120+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">Portland</span>
                <span className="sa-city-link">Eugene</span>
                <span className="sa-city-link">Salem</span>
              </div>
            </div>

            {/* Washington */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Washington
              </div>
              <div className="sa-state__count">110+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">Seattle</span>
                <span className="sa-city-link">Spokane</span>
                <span className="sa-city-link">Tacoma</span>
              </div>
            </div>

            {/* North Carolina */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                North Carolina
              </div>
              <div className="sa-state__count">90+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">Charlotte</span>
                <span className="sa-city-link">Raleigh</span>
                <span className="sa-city-link">Durham</span>
              </div>
            </div>

            {/* Georgia */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Georgia
              </div>
              <div className="sa-state__count">80+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">Atlanta</span>
                <span className="sa-city-link">Augusta</span>
                <span className="sa-city-link">Macon</span>
              </div>
            </div>

            {/* Virginia */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Virginia
              </div>
              <div className="sa-state__count">70+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">Virginia Beach</span>
                <span className="sa-city-link">Richmond</span>
                <span className="sa-city-link">Arlington</span>
              </div>
            </div>

            {/* Illinois */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                Illinois
              </div>
              <div className="sa-state__count">60+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">Chicago</span>
                <span className="sa-city-link">Springfield</span>
                <span className="sa-city-link">Naperville</span>
              </div>
            </div>

            {/* New York */}
            <div className="sa-state">
              <div className="sa-state__name">
                <div className="sa-state__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                New York
              </div>
              <div className="sa-state__count">50+ homes powered</div>
              <div className="sa-state__cities">
                <span className="sa-city-link">New York City</span>
                <span className="sa-city-link">Buffalo</span>
                <span className="sa-city-link">Albany</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-cta">
        <div className="sa-cta__inner">
          <span className="label">Don&apos;t See Your City?</span>
          <h2 className="heading-xl">We&apos;re Expanding Fast</h2>
          <p
            className="subheading"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            Contact us to check if we serve your area. We add new cities every
            month.
          </p>
          <Link href="/schedule" className="btn btn--primary btn--large">
            Check My Area →
          </Link>
        </div>
      </section>
    </>
  );
}
