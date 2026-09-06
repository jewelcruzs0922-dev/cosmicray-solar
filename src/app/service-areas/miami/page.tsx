import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solar Installation in Miami",
  description:
    "Professional solar panel installation in Miami. Save up to 65% on electricity bills with 248 sunny days per year.",
  openGraph: {
    title: "Solar Installation in Miami | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Miami. Free assessments, expert installation, and 25-year warranties.",
    type: "website",
    url: "https://www.cosmicray.com/service-areas/miami",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Solar Installation in Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation in Miami | Cosmic Ray Solar",
    description:
      "Professional solar panel installation in Miami. Save up to 65% on electricity bills.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/service-areas/miami",
  },
};

export default function MiamiPage() {
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
              Miami
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
              Solar Panels in Miami, FL
            </h1>
            <p>
              Cosmic Ray Solar provides professional residential and commercial
              solar installations across the greater Miami area. With 248 sunny
              days per year and Florida&apos;s strong solar incentives, Miami is
              one of the best cities in the Southeast for solar energy.
            </p>
            <div className="sa-local-stats">
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">100+</span>
                <span className="sa-local-stat__label">Homes Powered</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">4.9/5</span>
                <span className="sa-local-stat__label">Average Rating</span>
              </div>
              <div className="sa-local-stat">
                <span className="sa-local-stat__num">$1,900</span>
                <span className="sa-local-stat__label">
                  Avg. Annual Savings
                </span>
              </div>
            </div>
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Miami Quote →
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
          <h2>Why Go Solar in Miami?</h2>
          <p>
            Miami receives an average of 248 sunny days per year — well above
            the national average of 205. The Sunshine State&apos;s abundant
            sunlight and favorable solar policies make Miami an excellent market
            for solar energy. Combined with Florida&apos;s generous incentives,
            going solar in Miami is a smart financial decision.
          </p>

          <h2>Florida Solar Incentives</h2>
          <p>
            Miami homeowners have access to excellent solar incentives:
          </p>
          <ul>
            <li>
              <strong>Federal Investment Tax Credit (ITC):</strong> 30% off your
              total installation cost
            </li>
            <li>
              <strong>Florida Property Tax Exemption:</strong> Solar increases
              your home value without raising property taxes
            </li>
            <li>
              <strong>Net Metering:</strong> Credit for excess energy sent back
              to the grid through FPL
            </li>
            <li>
              <strong>Sales Tax Exemption:</strong> Solar equipment is exempt
              from Florida state sales tax
            </li>
            <li>
              <strong>FPL SolarTogether Program:</strong> Community solar option
              for renters and those with unsuitable roofs
            </li>
          </ul>

          <h2>Our Miami Services</h2>
          <p>
            We provide complete solar solutions for Miami homeowners and
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

          <h2>Miami Solar Stats</h2>
          <p>
            The average Miami home uses about 12,000 kWh of electricity per
            year due to year-round air conditioning demand. A typical 8-10kW
            solar system can offset 100% of this usage. With electricity rates
            averaging $0.14/kWh in Miami, solar savings add up fast — most of
            our Miami customers save $1,700-$2,400 per year.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="sa-local-neighborhoods">
        <div className="sa-local-neighborhoods__inner">
          <span className="label">Serving All of Miami</span>
          <h2 className="heading-xl">Areas We Serve in Miami</h2>
          <div className="sa-tags">
            <span className="sa-tag">Fort Lauderdale</span>
            <span className="sa-tag">Hollywood</span>
            <span className="sa-tag">Hialeah</span>
            <span className="sa-tag">Coral Gables</span>
            <span className="sa-tag">Homestead</span>
            <span className="sa-tag">Kendall</span>
            <span className="sa-tag">Pembroke Pines</span>
            <span className="sa-tag">Miramar</span>
            <span className="sa-tag">Aventura</span>
            <span className="sa-tag">Brickell</span>
            <span className="sa-tag">Coconut Grove</span>
            <span className="sa-tag">Wynwood</span>
            <span className="sa-tag">South Beach</span>
            <span className="sa-tag">Key Biscayne</span>
            <span className="sa-tag">Doral</span>
            <span className="sa-tag">Miami Beach</span>
            <span className="sa-tag">Coral Springs</span>
            <span className="sa-tag">Plantation</span>
            <span className="sa-tag">Davie</span>
            <span className="sa-tag">Boca Raton</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-local-cta">
        <div className="sa-local-cta__inner">
          <h2 className="heading-xl heading-xl--light">
            Ready to Go Solar in Miami?
          </h2>
          <p
            className="subheading subheading--light"
            style={{ margin: "0 auto var(--space-8)" }}
          >
            Get a free assessment for your Miami home. We&apos;ll analyze your
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
