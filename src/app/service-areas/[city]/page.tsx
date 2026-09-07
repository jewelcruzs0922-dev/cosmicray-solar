import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL, SITE_NAME, PHONE, PHONE_LINK } from "@/lib/constants";
import { cities } from "@/data/cities";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `Solar Installation in ${city.name}, ${city.stateAbbr}`,
    description: `Professional solar installation in ${city.name}, ${city.state}. Save up to 75% on electricity with Cosmic Ray Solar. Free assessment.`,
    openGraph: {
      title: `Solar Installation in ${city.name} | ${SITE_NAME}`,
      description: `Professional solar installation in ${city.name}, ${city.state}. Save up to 75% on electricity.`,
      type: "website",
      url: `${SITE_URL}/service-areas/${city.slug}`,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${SITE_NAME} — Solar in ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title: `Solar Installation in ${city.name} | ${SITE_NAME}`, description: `Professional solar installation in ${city.name}, ${city.state}.`, images: [`${SITE_URL}/opengraph-image`] },
    alternates: { canonical: `${SITE_URL}/service-areas/${city.slug}` },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return null;

  return (
    <>
      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: city.name }]} />

      <section className="city-hero">
        <div className="city-hero__inner">
          <span className="label">Solar Installation</span>
          <h1 className="heading-xl">
            Solar in {city.name}, {city.stateAbbr}
          </h1>
          <p className="subheading">{city.tagline}</p>
        </div>
      </section>

      <section className="city-content">
        <div className="city-content__inner">
          <div className="city-content__main">
            <h2 className="heading-lg">Why Solar in {city.name}?</h2>
            <p>{city.description}</p>

            <h3 className="heading-md">Available Incentives</h3>
            <ul className="city-incentives">
              {city.incentives.map((incentive) => (
                <li key={incentive}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {incentive}
                </li>
              ))}
            </ul>

            <h3 className="heading-md">Neighborhoods We Serve</h3>
            <div className="city-neighborhoods">
              {city.neighborhoods.map((hood) => (
                <span key={hood} className="city-neighborhood">{hood}</span>
              ))}
            </div>
          </div>

          <div className="city-content__sidebar">
            <div className="city-stats-card">
              <h3 className="heading-md">{city.name} Solar Stats</h3>
              {city.stats.map((stat) => (
                <div key={stat.label} className="city-stat">
                  <span className="city-stat__value">{stat.value}</span>
                  <span className="city-stat__label">{stat.label}</span>
                </div>
              ))}
              <Link href="/schedule" className="btn btn--primary btn--full">
                Get Free Quote
              </Link>
              <a href={`tel:${PHONE_LINK}`} className="btn btn--outline btn--full">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="city-cta">
        <div className="city-cta__inner">
          <h2 className="heading-xl">Ready to Go Solar in {city.name}?</h2>
          <p className="subheading">
            Get a free, no-obligation quote today. We&apos;ll analyze your roof, energy usage, and local incentives.
          </p>
          <div className="city-cta__actions">
            <Link href="/schedule" className="btn btn--accent btn--large">Get Free Quote</Link>
            <a href={`tel:${PHONE_LINK}`} className="btn btn--outline btn--large">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
