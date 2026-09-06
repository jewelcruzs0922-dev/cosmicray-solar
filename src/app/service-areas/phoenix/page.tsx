import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Installation in Phoenix",
  description:
    "Professional solar panel installation in Phoenix. Save up to 75% on electricity bills with 299 sunny days per year.",
  openGraph: {
    title: "Solar Installation in Phoenix | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Phoenix. Free assessments, expert installation, and 25-year warranties.",
    type: "website",
    url: "https://www.cosmicray.com/service-areas/phoenix",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Solar Installation in Phoenix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation in Phoenix | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Phoenix. Save up to 75% on electricity bills.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/service-areas/phoenix",
  },
};

export default function PhoenixPage() {
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
              Phoenix
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
              Solar Panels in Phoenix, AZ
            </h1>
            <p>
              Cosmic Ray Solar provides professional residential and commercial
              solar installations across the greater Phoenix area. With 299
              sunny days per year, Phoenix is one of the sunniest cities in
              America and a top market for solar energy.
            </p>
            <div className="sa-local-stats">
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">200+</span>
                <span className="sa-local-stat__label">Homes Powered</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">4.9/5</span>
                <span className="sa-local-stat__label">Average Rating</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">$2,600</span>
                <span className="sa-local-stat__label">
                  Avg. Annual Savings
                </span>
              </div>
            </div>
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Phoenix Quote →
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
          <h2>Why Go Solar in Phoenix?</h2>
          <p>
            Phoenix receives an average of 299 sunny days per year — one of the
            highest totals in the United States. This makes Phoenix one of the
            most solar-efficient cities in the country. Combined with
            Arizona&apos;s solar incentives, going solar in Phoenix is a smart
            financial decision.
          </p>

          <h2>Arizona Solar Incentives</h2>
          <p>
            Phoenix homeowners have access to excellent solar incentives:
          </p>
          <ul>
            <li>
              <strong>Federal Investment Tax Credit (ITC):</strong> 30% off your
              total installation cost
            </li>
            <li>
              <strong>Arizona State Tax Credit:</strong> 25% of system cost, up
              to $1,000
            </li>
            <li>
              <strong>APS and SRP Rebates:</strong> Utility rebates for
              qualifying solar installations
            </li>
            <li>
              <strong>Property Tax Exemption:</strong> Solar increases your home
              value without raising property taxes
            </li>
            <li>
              <strong>No Sales Tax on Solar:</strong> Arizona exempts solar
              equipment from state sales tax
            </li>
          </ul>

          <h2>Our Phoenix Services</h2>
          <p>
            We provide complete solar solutions for Phoenix homeowners and
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

          <h2>Phoenix Solar Stats</h2>
          <p>
            The average Phoenix home uses about 12,000 kWh of electricity per
            year due to air conditioning demand. A typical 8-10kW solar system
            can offset 100% of this usage. With electricity rates averaging
            $0.13/kWh in Phoenix, solar savings add up fast — most of our
            Phoenix customers save $1,800-$2,800 per year.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="sa-local-neighborhoods">
        <div className="sa-local-neighborhoods__inner">
          <span className="label">Serving All of Phoenix</span>
          <h2 className="heading-xl">Areas We Serve in Phoenix</h2>
          <div className="sa-tags">
            <span className="sa-tag">Scottsdale</span>
            <span className="sa-tag">Mesa</span>
            <span className="sa-tag">Tempe</span>
            <span className="sa-tag">Chandler</span>
            <span className="sa-tag">Gilbert</span>
            <span className="sa-tag">Glendale</span>
            <span className="sa-tag">Peoria</span>
            <span className="sa-tag">Surprise</span>
            <span className="sa-tag">Goodyear</span>
            <span className="sa-tag">Buckeye</span>
            <span className="sa-tag">Avondale</span>
            <span className="sa-tag">Tempe</span>
            <span className="sa-tag">Central Phoenix</span>
            <span className="sa-tag">Arcadia</span>
            <span className="sa-tag">Ahwatukee</span>
            <span className="sa-tag">North Scottsdale</span>
            <span className="sa-tag">Fountain Hills</span>
            <span className="sa-tag">Paradise Valley</span>
            <span className="sa-tag">Cave Creek</span>
            <span className="sa-tag">Queen Creek</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-local-cta">
        <div className="sa-local-cta__inner">
          <h2 className="heading-xl heading-xl--light">
            Ready to Go Solar in Phoenix?
          </h2>
          <p
            className="subheading subheading--light"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            Get a free assessment for your Phoenix home. We&apos;ll analyze your
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
