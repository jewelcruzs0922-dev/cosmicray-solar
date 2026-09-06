import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solar Installation in Los Angeles, CA",
  description:
    "Solar panel installation in Los Angeles, CA. Cosmic Ray Solar provides residential and commercial solar installations across LA. Free assessments, 25-year warranties.",
  openGraph: {
    title: "Solar Installation in Los Angeles, CA | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Los Angeles. Free assessments, expert installation, and 25-year warranties.",
    type: "website",
    url: "https://www.cosmicray.com/service-areas/los-angeles",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Solar Installation in Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation in Los Angeles | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Los Angeles. Save up to 70% on electricity bills.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/service-areas/los-angeles",
  },
};

export default function LosAngelesPage() {
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
              Los Angeles
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
              Solar Panels in Los Angeles, CA
            </h1>
            <p>
              Cosmic Ray Solar provides professional residential and commercial
              solar installations across the greater Los Angeles area. With 284
              sunny days per year, LA is one of the best cities in America for
              solar energy.
            </p>
            <div className="sa-local-stats">
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">180+</span>
                <span className="sa-local-stat__label">Homes Powered</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">4.9/5</span>
                <span className="sa-local-stat__label">Average Rating</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">$2,400</span>
                <span className="sa-local-stat__label">
                  Avg. Annual Savings
                </span>
              </div>
            </div>
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free LA Quote →
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
          <h2>Why Go Solar in Los Angeles?</h2>
          <p>
            Los Angeles receives an average of 284 sunny days per year — well
            above the national average of 205. This makes LA one of the most
            solar-efficient cities in the United States. Combined with
            California&apos;s generous incentives, going solar in LA is a smart
            financial decision.
          </p>

          <h2>California Solar Incentives</h2>
          <p>
            Los Angeles homeowners have access to some of the best solar
            incentives in the country:
          </p>
          <ul>
            <li>
              <strong>Federal Investment Tax Credit (ITC):</strong> 30% off your
              total installation cost
            </li>
            <li>
              <strong>California NEM 3.0:</strong> Net metering credits for
              excess solar energy sent to the grid
            </li>
            <li>
              <strong>SGIP (Self-Generation Incentive Program):</strong> Rebates
              for battery storage systems
            </li>
            <li>
              <strong>Property Tax Exemption:</strong> Solar increases your home
              value without raising property taxes
            </li>
            <li>
              <strong>LADWP Solar Incentive Program:</strong> Additional rebates
              for LA Department of Water and Power customers
            </li>
          </ul>

          <h2>Our Los Angeles Services</h2>
          <p>
            We provide complete solar solutions for LA homeowners and
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

          <h2>Los Angeles Solar Stats</h2>
          <p>
            The average LA home uses about 10,000 kWh of electricity per year.
            A typical 7-9kW solar system can offset 100% of this usage. With
            electricity rates averaging $0.34/kWh in LA (among the highest in
            the nation), solar savings add up fast — most of our LA customers
            save $2,000-$3,000 per year.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="sa-local-neighborhoods">
        <div className="sa-local-neighborhoods__inner">
          <span className="label">Serving All of LA</span>
          <h2 className="heading-xl">
            Neighborhoods We Serve in Los Angeles
          </h2>
          <div className="sa-tags">
            <span className="sa-tag">Santa Monica</span>
            <span className="sa-tag">Beverly Hills</span>
            <span className="sa-tag">Pasadena</span>
            <span className="sa-tag">Glendale</span>
            <span className="sa-tag">Burbank</span>
            <span className="sa-tag">Long Beach</span>
            <span className="sa-tag">Torrance</span>
            <span className="sa-tag">Inglewood</span>
            <span className="sa-tag">Culver City</span>
            <span className="sa-tag">West Hollywood</span>
            <span className="sa-tag">Silver Lake</span>
            <span className="sa-tag">Echo Park</span>
            <span className="sa-tag">Hollywood Hills</span>
            <span className="sa-tag">Venice</span>
            <span className="sa-tag">Mar Vista</span>
            <span className="sa-tag">Encino</span>
            <span className="sa-tag">Sherman Oaks</span>
            <span className="sa-tag">Woodland Hills</span>
            <span className="sa-tag">Calabasas</span>
            <span className="sa-tag">Malibu</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-local-cta">
        <div className="sa-local-cta__inner">
          <h2 className="heading-xl heading-xl--light">
            Ready to Go Solar in LA?
          </h2>
          <p
            className="subheading subheading--light"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            Get a free assessment for your Los Angeles home. We&apos;ll analyze
            your roof, energy usage, and potential savings.
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
