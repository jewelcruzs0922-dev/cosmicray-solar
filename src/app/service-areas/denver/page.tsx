import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Installation in Denver",
  description:
    "Professional solar panel installation in Denver. Save up to 70% on electricity bills with 300 sunny days per year.",
  openGraph: {
    title: "Solar Installation in Denver | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Denver. Free assessments, expert installation, and 25-year warranties.",
    type: "website",
    url: "https://www.cosmicray.com/service-areas/denver",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Solar Installation in Denver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation in Denver | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Denver. Save up to 70% on electricity bills.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/service-areas/denver",
  },
};

export default function DenverPage() {
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
              Denver
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
              Solar Panels in Denver, CO
            </h1>
            <p>
              Cosmic Ray Solar provides professional residential and commercial
              solar installations across the greater Denver area. With 300 sunny
              days per year, Denver is one of the best cities in America for
              solar energy production.
            </p>
            <div className="sa-local-stats">
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">120+</span>
                <span className="sa-local-stat__label">Homes Powered</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">4.9/5</span>
                <span className="sa-local-stat__label">Average Rating</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">$2,000</span>
                <span className="sa-local-stat__label">
                  Avg. Annual Savings
                </span>
              </div>
            </div>
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Denver Quote →
            </Link>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/12224996/pexels-photo-12224996.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2"
              srcSet="https://images.pexels.com/photos/12224996/pexels-photo-12224996.jpeg?auto=compress&cs=tinysrgb&w=400&dpr=1 400w, https://images.pexels.com/photos/12224996/pexels-photo-12224996.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2 800w"
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
          <h2>Why Go Solar in Denver?</h2>
          <p>
            Denver receives an average of 300 sunny days per year — one of the
            highest totals in the United States. The Mile High City&apos;s
            altitude and dry climate create ideal conditions for solar energy
            production. Combined with Colorado&apos;s generous incentives, going
            solar in Denver is a smart financial decision.
          </p>

          <h2>Colorado Solar Incentives</h2>
          <p>
            Denver homeowners have access to some of the best solar incentives
            in the country:
          </p>
          <ul>
            <li>
              <strong>Federal Investment Tax Credit (ITC):</strong> 30% off your
              total installation cost
            </li>
            <li>
              <strong>Colorado State Tax Credit:</strong> 30% of system cost, up
              to $5,000
            </li>
            <li>
              <strong>Xcel Energy Rebates:</strong> Performance-based incentives
              for solar generation
            </li>
            <li>
              <strong>Property Tax Exemption:</strong> Solar increases your home
              value without raising property taxes
            </li>
            <li>
              <strong>Net Metering:</strong> Credit for excess energy sent back
              to the grid
            </li>
          </ul>

          <h2>Our Denver Services</h2>
          <p>
            We provide complete solar solutions for Denver homeowners and
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

          <h2>Denver Solar Stats</h2>
          <p>
            The average Denver home uses about 10,000 kWh of electricity per
            year. A typical 7-9kW solar system can offset 100% of this usage.
            With electricity rates averaging $0.12/kWh in Denver, solar savings
            add up fast — most of our Denver customers save $1,800-$2,500 per
            year.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="sa-local-neighborhoods">
        <div className="sa-local-neighborhoods__inner">
          <span className="label">Serving All of Denver</span>
          <h2 className="heading-xl">Areas We Serve in Denver</h2>
          <div className="sa-tags">
            <span className="sa-tag">Aurora</span>
            <span className="sa-tag">Lakewood</span>
            <span className="sa-tag">Arvada</span>
            <span className="sa-tag">Westminster</span>
            <span className="sa-tag">Thornton</span>
            <span className="sa-tag">Centennial</span>
            <span className="sa-tag">Boulder</span>
            <span className="sa-tag">Littleton</span>
            <span className="sa-tag">Englewood</span>
            <span className="sa-tag">Highlands Ranch</span>
            <span className="sa-tag">Castle Rock</span>
            <span className="sa-tag">Parker</span>
            <span className="sa-tag">Brighton</span>
            <span className="sa-tag">Broomfield</span>
            <span className="sa-tag">Louisville</span>
            <span className="sa-tag">Lafayette</span>
            <span className="sa-tag">Golden</span>
            <span className="sa-tag">Wheat Ridge</span>
            <span className="sa-tag">Cherry Creek</span>
            <span className="sa-tag">Capitol Hill</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-local-cta">
        <div className="sa-local-cta__inner">
          <h2 className="heading-xl heading-xl--light">
            Ready to Go Solar in Denver?
          </h2>
          <p
            className="subheading subheading--light"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            Get a free assessment for your Denver home. We&apos;ll analyze your
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
