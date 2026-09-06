import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solar Installation in Austin",
  description:
    "Professional solar panel installation in Austin. Save up to 70% on electricity bills with 300 sunny days per year.",
  openGraph: {
    title: "Solar Installation in Austin | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Austin. Free assessments, expert installation, and 25-year warranties.",
    type: "website",
    url: "https://www.cosmicray.com/service-areas/austin",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Solar Installation in Austin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation in Austin | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Austin. Save up to 70% on electricity bills.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/service-areas/austin",
  },
};

export default function AustinPage() {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumbs__inner">
          <ol className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link href="/service-areas">Service Areas</Link>
            </li>
            <li className="breadcrumbs__item" aria-current="page">
              Austin
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="sa-local-hero">
        <div className="sa-local-hero__inner">
          <div>
            <span className="label label--light">Solar Installation</span>
            <h1 className="heading-xl heading-xl--light">
              Solar Panels in Austin, TX
            </h1>
            <p>
              Cosmic Ray Solar provides professional residential and commercial
              solar installations across the greater Austin area. With 300 sunny
              days per year and Texas&apos;s favorable solar policies, Austin is
              one of the fastest-growing solar markets in the country.
            </p>
            <div className="sa-local-stats">
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">150+</span>
                <span className="sa-local-stat__label">Homes Powered</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">4.9/5</span>
                <span className="sa-local-stat__label">Average Rating</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">$2,100</span>
                <span className="sa-local-stat__label">
                  Avg. Annual Savings
                </span>
              </div>
            </div>
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Austin Quote →
            </Link>
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/12224996/pexels-photo-12224996.jpeg"
              sizes="(max-width: 1024px) 100vw, 500px"
              alt="Solar panels installed on residential rooftops"
              width={800}
              height={600}
              loading="lazy"
              style={{
                borderRadius: "var(--radius-2xl)",
                boxShadow: "var(--shadow-xl)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="sa-local-content">
        <div className="sa-local-content__inner">
          <h2>Why Go Solar in Austin?</h2>
          <p>
            Austin receives an average of 300 sunny days per year — one of the
            highest totals in the United States. Combined with Texas&apos;s
            property tax exemption and Austin Energy&apos;s solar programs,
            going solar in Austin is a smart financial decision for homeowners.
          </p>

          <h2>Texas Solar Incentives</h2>
          <p>
            Austin homeowners have access to excellent solar incentives:
          </p>
          <ul>
            <li>
              <strong>Federal Investment Tax Credit (ITC):</strong> 30% off your
              total installation cost
            </li>
            <li>
              <strong>Texas Property Tax Exemption:</strong> 100% exemption —
              solar increases your home value without raising property taxes
            </li>
            <li>
              <strong>Austin Energy Solar Rebates:</strong> Rebates for
              qualifying residential and commercial installations
            </li>
            <li>
              <strong>No State Income Tax:</strong> Additional savings compared
              to states with income tax
            </li>
            <li>
              <strong>Net Metering:</strong> Credit for excess energy sent back
              to the grid through Austin Energy
            </li>
          </ul>

          <h2>Our Austin Services</h2>
          <p>
            We provide complete solar solutions for Austin homeowners and
            businesses:
          </p>
          <ul>
            <li>Residential solar panel installation</li>
            <li>
              Commercial solar installations for offices, retail, and warehouses
            </li>
            <li>Tesla Powerwall and Enphase battery storage</li>
            <li>Level 2 EV charger installation</li>
            <li>Solar system maintenance and monitoring</li>
            <li>Roof repair and replacement coordination</li>
          </ul>

          <h2>Austin Solar Stats</h2>
          <p>
            The average Austin home uses about 11,000 kWh of electricity per
            year due to summer cooling demand. A typical 7-9kW solar system can
            offset 100% of this usage. With electricity rates averaging
            $0.12/kWh in Austin, solar savings add up fast — most of our Austin
            customers save $1,800-$2,600 per year.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="sa-local-neighborhoods">
        <div className="sa-local-neighborhoods__inner">
          <span className="label">Serving All of Austin</span>
          <h2 className="heading-xl">Areas We Serve in Austin</h2>
          <div className="sa-tags">
            <span className="sa-tag">Round Rock</span>
            <span className="sa-tag">Cedar Park</span>
            <span className="sa-tag">San Marcos</span>
            <span className="sa-tag">Georgetown</span>
            <span className="sa-tag">Pflugerville</span>
            <span className="sa-tag">Lakeway</span>
            <span className="sa-tag">Kyle</span>
            <span className="sa-tag">Buda</span>
            <span className="sa-tag">Leander</span>
            <span className="sa-tag">Dripping Springs</span>
            <span className="sa-tag">Barton Creek</span>
            <span className="sa-tag">West Lake Hills</span>
            <span className="sa-tag">Hyde Park</span>
            <span className="sa-tag">Mueller</span>
            <span className="sa-tag">The Domain</span>
            <span className="sa-tag">South Congress</span>
            <span className="sa-tag">East Austin</span>
            <span className="sa-tag">Downtown Austin</span>
            <span className="sa-tag">Zilker</span>
            <span className="sa-tag">Travis Heights</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-local-cta">
        <div className="sa-local-cta__inner">
          <h2 className="heading-xl heading-xl--light">
            Ready to Go Solar in Austin?
          </h2>
          <p
            className="subheading subheading--light"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            Get a free assessment for your Austin home. We&apos;ll analyze your
            roof, energy usage, and potential savings.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Quote
            </Link>
            <a
              href="tel:+1555123456"
              className="btn btn--outline-light btn--large"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
