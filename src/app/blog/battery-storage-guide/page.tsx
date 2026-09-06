import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Battery Storage Guide: Is It Worth It?",
  description:
    "Home battery storage: is it worth it? Compare Tesla Powerwall, Enphase, and Generac. Learn costs, pros, cons, and whether battery storage makes sense for your home.",
  openGraph: {
    title: "Home Battery Storage Guide: Is It Worth It? | Cosmic Ray Solar",
    description:
      "Compare Tesla Powerwall, Enphase, and Generac. Costs, pros, cons, and whether battery storage makes sense for you.",
    type: "article",
    url: "https://www.cosmicray.com/blog/battery-storage-guide",
    publishedTime: "2025-01-22T08:00:00+00:00",
    modifiedTime: "2026-08-01T08:00:00+00:00",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Battery Storage Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Battery Storage Guide: Is It Worth It? | Cosmic Ray Solar",
    description:
      "Compare Tesla Powerwall, Enphase, and Generac. Costs, pros, cons, and whether battery storage makes sense for you.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/blog/battery-storage-guide",
  },
};

export default function BatteryStorageGuidePage() {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumbs__inner">
          <ol className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="breadcrumbs__item" aria-current="page">
              Battery Storage Guide
            </li>
          </ol>
        </div>
      </nav>

      <section className="post-hero">
        <div className="post-hero__inner">
          <div className="post-hero__meta">
            <span className="post-hero__tag">Battery</span>
            <time dateTime="2025-01-22">January 22, 2025</time>
            <span>7 min read</span>
          </div>
          <h1 className="heading-xl heading-xl--light">
            Home Battery Storage: Is It Worth It? Pros, Cons &amp; Costs
          </h1>
          <p>
            Everything you need to know about home battery storage — from how it
            works to whether the investment makes sense for your home.
          </p>
        </div>
      </section>

      <section className="post-content">
        <div className="post-content__inner">
          <Link href="/blog" className="post-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>{" "}
            Back to Blog
          </Link>

          <p>
            Solar panels generate electricity during the day, but what happens
            at night? That&apos;s where <strong>home battery storage</strong>{" "}
            comes in. A battery stores excess solar energy so you can use it
            when the sun isn&apos;t shining — or during a power outage.
          </p>
          <p>But is it worth the extra cost? Let&apos;s break it down.</p>

          <h2>How Home Battery Storage Works</h2>
          <p>Here&apos;s the simple version:</p>
          <ol>
            <li>
              Your solar panels generate electricity during the day
            </li>
            <li>
              Any excess energy goes into your battery instead of the grid
            </li>
            <li>
              At night (or during an outage), your home draws power from the
              battery
            </li>
            <li>
              If the battery is full and panels are still producing, excess goes
              to the grid (earning you credits under net metering)
            </li>
          </ol>

          <h2>Battery Comparison: Tesla vs Enphase vs Generac</h2>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", margin: "var(--space-6) 0" }}>
            <table className="post-table" style={{ minWidth: 500 }}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Tesla Powerwall 3</th>
                  <th>Enphase IQ 5P</th>
                  <th>Generac PWRcell</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capacity</td>
                  <td>13.5 kWh</td>
                  <td>5 kWh (expandable)</td>
                  <td>9 kWh</td>
                </tr>
                <tr>
                  <td>Power Output</td>
                  <td>11.5 kW</td>
                  <td>3.84 kW</td>
                  <td>4.5 kW</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>~$8,500</td>
                  <td>~$4,800</td>
                  <td>~$5,200</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>10 years</td>
                  <td>15 years</td>
                  <td>10 years</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Whole-home backup</td>
                  <td>Modular expansion</td>
                  <td>Mid-range option</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Pros of Battery Storage</h2>
          <ul>
            <li>
              <strong>Backup power during outages:</strong> Your lights stay on
              when the grid goes down
            </li>
            <li>
              <strong>Maximize solar self-consumption:</strong> Use your own
              solar energy instead of selling it to the grid at low rates
            </li>
            <li>
              <strong>Time-of-use optimization:</strong> Store cheap daytime
              solar and use it during expensive evening peak hours
            </li>
            <li>
              <strong>Increased home value:</strong> Homes with battery storage
              sell for more
            </li>
            <li>
              <strong>SGIP rebates:</strong> California offers rebates up to
              $2,000-$4,000 for battery installations
            </li>
          </ul>

          <h2>Cons of Battery Storage</h2>
          <ul>
            <li>
              <strong>High upfront cost:</strong> $4,800-$10,000+ depending on
              the system
            </li>
            <li>
              <strong>Limited capacity:</strong> Most batteries can&apos;t power
              your entire home for very long during an outage
            </li>
            <li>
              <strong>Battery degradation:</strong> Batteries lose capacity over
              time (typically 2-3% per year)
            </li>
            <li>
              <strong>Not always cost-effective:</strong> If your utility has low
              time-of-use rates, the payback period may be very long
            </li>
          </ul>

          <h2>When Battery Storage IS Worth It</h2>
          <ul>
            <li>
              You experience frequent power outages in your area
            </li>
            <li>
              Your utility has high time-of-use rates (like California&apos;s
              TOU-D-Prime at $0.54/kWh peak)
            </li>
            <li>You want true energy independence</li>
            <li>
              You can take advantage of SGIP or other battery rebates
            </li>
            <li>
              You&apos;re pairing it with an EV charger to avoid peak demand
              charges
            </li>
          </ul>

          <h2>When Battery Storage ISN&apos;T Worth It</h2>
          <ul>
            <li>
              Your area has reliable grid power and few outages
            </li>
            <li>
              Your utility offers favorable net metering (full retail credit for
              excess solar)
            </li>
            <li>
              Your budget is tight — put the money toward more panels instead
            </li>
            <li>
              You rarely use electricity during peak hours
            </li>
          </ul>

          <div className="post-cta">
            <h3>Not Sure If Battery Storage Is Right for You?</h3>
            <p>
              Our team will analyze your energy usage, utility rates, and outage
              history to give you an honest recommendation.
            </p>
            <Link href="/#contact-form" className="btn btn--primary btn--large">
              Get Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter__inner">
          <h2 className="heading-xl">Stay Informed</h2>
          <p className="subheading">
            Get the latest solar tips, guides, and news delivered to your inbox.
          </p>
          <form className="newsletter__form" action="https://formspree.io/f/mgaezpjb" method="POST">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit" className="btn btn--primary">
              Subscribe
            </button>
          </form>
          <p className="newsletter__disclaimer">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__noise" />
        <div className="cta-section__inner">
          <span className="label label--dark">Ready to Go Solar?</span>
          <h2 className="heading-xl heading-xl--light">
            Start Saving With Solar Today
          </h2>
          <p className="subheading subheading--light">
            Get a free, no-obligation quote and see how much you can save with
            solar energy.
          </p>
          <div className="cta-section__actions">
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Quote
            </Link>
            <Link href="/blog" className="btn btn--outline-light btn--large">
              Read More Guides
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Home Battery Storage: Is It Worth It? Pros, Cons & Costs",
            description:
              "Everything you need to know about home battery storage — from how it works to whether the investment makes sense for your home.",
            datePublished: "2025-01-22",
            dateModified: "2025-01-22",
            author: { "@type": "Organization", name: "Cosmic Ray Solar" },
            publisher: {
              "@type": "Organization",
              name: "Cosmic Ray Solar",
              logo: {
                "@type": "ImageObject",
                url: "https://www.cosmicray.com/logo.png",
              },
            },
            image:
              "https://images.pexels.com/photos/9800025/pexels-photo-9800025.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.cosmicray.com/blog/battery-storage-guide",
            },
          }),
        }}
      />
    </>
  );
}
