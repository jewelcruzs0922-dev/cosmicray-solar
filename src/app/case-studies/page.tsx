import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real solar installation case studies from Cosmic Ray Solar. See actual savings, before/after data, and customer stories from homes we've powered.",
  openGraph: {
    title: "Case Studies | Cosmic Ray Solar",
    description:
      "Real solar installation case studies with actual savings data and customer stories.",
    type: "website",
    url: `${SITE_URL}/case-studies`,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Cosmic Ray Solar",
    description:
      "Real results from real homeowners. See how Cosmic Ray Solar transformed homes across 15 states.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
};

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cosmic Ray Solar Case Studies",
  description:
    "Real results from real homeowners. See how Cosmic Ray Solar transformed homes across 15 states.",
  url: `${SITE_URL}/case-studies`,
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "The Johnson Family — Austin, TX",
      description:
        "Cut electricity bill from $310/mo to $18/mo with a 10.5kW system.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Martinez Family — Phoenix, AZ",
      description:
        "Eliminated $4,200/year in electricity costs with a 10kW system and Powerwalls.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Greenleaf Cafe — Denver, CO",
      description:
        "Cut electricity bill from $850/mo to near zero with a 50kW commercial system.",
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumbs__inner">
          <ol className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumbs__item" aria-current="page">
              Case Studies
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero__inner">
          <h1 className="heading-xl heading-xl--light">
            Real Results, Real Homes
          </h1>
          <p>
            See actual savings data, system details, and customer stories from
            Cosmic Ray Solar installations across the country.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="cs-section">
        <div className="cs-section__inner">
          {/* Case Study 1 */}
          <article className="cs-card">
            <div className="cs-card__img">
              <Image
                src="https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg"
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Aerial view of solar panels in a residential neighborhood"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="cs-card__body">
              <span className="cs-card__tag">Residential Solar</span>
              <h2 className="cs-card__title">
                Johnson Family — From $310/mo to $18/mo
              </h2>
              <div className="cs-card__location">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Austin, TX — Installed March 2024
              </div>
              <p className="cs-card__desc">
                The Johnsons were paying over $3,100/year in electricity. We
                installed a 10.5kW SunPower Maxeon system with battery backup.
                Within the first month, their bill dropped to $18 — just the
                grid connection fee.
              </p>
              <div className="cs-metrics">
                <div className="cs-metric">
                  <span className="cs-metric__value">94%</span>
                  <span className="cs-metric__label">Bill Reduction</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric__value">$3,492</span>
                  <span className="cs-metric__label">Annual Savings</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric__value">5.1 yrs</span>
                  <span className="cs-metric__label">Payback Period</span>
                </div>
              </div>
              <blockquote className="cs-card__quote">
                &quot;We were skeptical about solar, but the numbers don&apos;t
                lie. Our system paid for itself in under 5 years. Best decision
                we ever made.&quot;
              </blockquote>
              <div className="cs-card__author">
                — Maria &amp; David Johnson, Austin TX
              </div>
            </div>
          </article>

          {/* Case Study 2 */}
          <article className="cs-card">
            <div className="cs-card__img">
              <Image
                src="https://images.pexels.com/photos/37083400/pexels-photo-37083400.jpeg"
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Solar panels installed on a residential roof against blue sky"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="cs-card__body">
              <span className="cs-card__tag">Solar + Battery</span>
              <h2 className="cs-card__title">
                Martinez Family — Energy Independent in the Desert
              </h2>
              <div className="cs-card__location">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Phoenix, AZ — Installed June 2024
              </div>
              <p className="cs-card__desc">
                Living in Phoenix means extreme heat and frequent power outages.
                The Martinez family wanted solar with battery backup for peace of
                mind. We installed a 12kW system with two Tesla Powerwall 3
                batteries. During a 6-hour summer outage, their home stayed
                powered the entire time.
              </p>
              <div className="cs-metrics">
                <div className="cs-metric">
                  <span className="cs-metric__value">100%</span>
                  <span className="cs-metric__label">Backup Coverage</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric__value">$2,180</span>
                  <span className="cs-metric__label">Annual Savings</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric__value">6.8 yrs</span>
                  <span className="cs-metric__label">Payback Period</span>
                </div>
              </div>
              <blockquote className="cs-card__quote">
                &quot;When the neighborhood lost power during a monsoon, our
                lights stayed on. The kids didn&apos;t even notice. That&apos;s
                worth every penny.&quot;
              </blockquote>
              <div className="cs-card__author">
                — Carlos &amp; Ana Martinez, Phoenix AZ
              </div>
            </div>
          </article>

          {/* Case Study 3 */}
          <article className="cs-card">
            <div className="cs-card__img">
              <Image
                src="https://images.pexels.com/photos/30285845/pexels-photo-30285845.jpeg"
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Technician working on solar panel installation with tools"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="cs-card__body">
              <span className="cs-card__tag">Commercial Solar</span>
              <h2 className="cs-card__title">
                Greenleaf Cafe — Zero Energy Costs
              </h2>
              <div className="cs-card__location">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Denver, CO — Installed September 2024
              </div>
              <p className="cs-card__desc">
                Greenleaf Cafe was spending $850/month on electricity for their
                commercial kitchen, lighting, and HVAC. We designed a 25kW
                commercial system that covers 110% of their annual usage. They
                now receive net metering credits every month.
              </p>
              <div className="cs-metrics">
                <div className="cs-metric">
                  <span className="cs-metric__value">110%</span>
                  <span className="cs-metric__label">Coverage</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric__value">$10,200</span>
                  <span className="cs-metric__label">Annual Savings</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric__value">4.2 yrs</span>
                  <span className="cs-metric__label">Payback Period</span>
                </div>
              </div>
              <blockquote className="cs-card__quote">
                &quot;Our electricity bill used to be our second-biggest expense
                after rent. Now it&apos;s basically zero. Cosmic Ray made the
                whole process painless.&quot;
              </blockquote>
              <div className="cs-card__author">
                — Sarah Chen, Owner — Greenleaf Cafe, Denver CO
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-cta">
        <div className="cs-cta__inner">
          <span className="label">Your Home Could Be Next</span>
          <h2 className="heading-xl">Get Your Free Savings Estimate</h2>
          <p
            className="subheading"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            See how much you could save with solar. Our team will analyze your
            roof, energy usage, and local incentives — 100% free.
          </p>
          <Link href="/schedule" className="btn btn--primary btn--large">
            Get Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
