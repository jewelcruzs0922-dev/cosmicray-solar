import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "How Much Do Solar Panels Cost in 2025?",
  description:
    "How much do solar panels cost in 2025? Complete price breakdown by system size, factors affecting cost, and how much you'll save over 25 years.",
  openGraph: {
    title: "How Much Do Solar Panels Cost in 2025? | Cosmic Ray Solar",
    description:
      "Complete price breakdown by system size, factors affecting cost, and how much you'll save over 25 years.",
    type: "article",
    url: "https://www.cosmicray.com/blog/solar-cost-guide",
    publishedTime: "2025-01-15T08:00:00+00:00",
    modifiedTime: "2026-08-01T08:00:00+00:00",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Solar Panel Cost Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Do Solar Panels Cost in 2025? | Cosmic Ray Solar",
    description:
      "Complete price breakdown by system size, factors affecting cost, and how much you'll save over 25 years.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/blog/solar-cost-guide",
  },
};

export default function SolarCostGuidePage() {
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
              Solar Cost Guide
            </li>
          </ol>
        </div>
      </nav>

      <section className="post-hero">
        <div className="post-hero__inner">
          <div className="post-hero__meta">
            <span className="post-hero__tag">Guide</span>
            <time dateTime="2025-01-15">January 15, 2025</time>
            <span>8 min read</span>
          </div>
          <h1 className="heading-xl heading-xl--light">
            How Much Do Solar Panels Cost in 2025? Complete Price Breakdown
          </h1>
          <p>
            A detailed look at solar panel costs, factors that affect pricing,
            and how much you can expect to save over 25 years.
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
            If you&apos;re considering solar for your home, the first question
            is usually: <strong>how much will it cost?</strong> The answer
            depends on several factors, but we&apos;ll break down real numbers
            so you know exactly what to expect.
          </p>

          <h2>Solar Panel Cost by System Size</h2>
          <p>
            The cost of a solar installation depends primarily on the system
            size (measured in kilowatts, or kW). Here&apos;s what you can expect
            to pay in 2025 <em>before</em> the 30% federal tax credit:
          </p>

          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", margin: "var(--space-6) 0" }}>
            <table className="post-table" style={{ minWidth: 500 }}>
              <thead>
                <tr>
                  <th>System Size</th>
                  <th>Avg. Cost (Before ITC)</th>
                  <th>After 30% ITC</th>
                  <th>Typical Home</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4 kW</td>
                  <td>$12,000</td>
                  <td>$8,400</td>
                  <td>Small home / condo</td>
                </tr>
                <tr>
                  <td>6 kW</td>
                  <td>$18,000</td>
                  <td>$12,600</td>
                  <td>Average home</td>
                </tr>
                <tr>
                  <td>8 kW</td>
                  <td>$24,000</td>
                  <td>$16,800</td>
                  <td>Medium home</td>
                </tr>
                <tr>
                  <td>10 kW</td>
                  <td>$30,000</td>
                  <td>$21,000</td>
                  <td>Large home</td>
                </tr>
                <tr>
                  <td>12 kW</td>
                  <td>$36,000</td>
                  <td>$25,200</td>
                  <td>Large home / EV owner</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The average residential solar installation in the U.S. costs about{" "}
            <strong>$3.00 per watt</strong> before incentives. With the 30%
            federal ITC, that drops to about <strong>$2.10 per watt</strong>.
          </p>

          <h2>What Affects the Price?</h2>
          <p>
            Several factors influence your final cost:
          </p>

          <h3>1. System Size</h3>
          <p>
            Bigger systems cost more upfront but produce more energy. A 10kW
            system costs more than a 6kW system, but it may offset 100% of your
            electricity bill instead of 70%.
          </p>

          <h3>2. Panel Type</h3>
          <p>
            Premium panels like SunPower Maxeon cost more per watt
            ($0.40-$0.50/watt) but offer higher efficiency (22%+) and longer
            warranties. Budget panels like Canadian Solar cost less
            ($0.25-$0.35/watt) with slightly lower efficiency (19-20%).
          </p>

          <h3>3. Roof Condition</h3>
          <p>
            If your roof needs repair or replacement before installation, that
            adds to the total cost. We coordinate with roofing partners to
            bundle the work and save you money.
          </p>

          <h3>4. Battery Storage</h3>
          <p>
            Adding a home battery (like Tesla Powerwall at ~$8,500 or Enphase
            IQ Battery at ~$4,800) increases the upfront cost but provides
            backup power during outages and maximizes your solar
            self-consumption.
          </p>

          <h3>5. Location &amp; Permits</h3>
          <p>
            Permit costs vary by city. Some areas charge $500-$2,000 for solar
            permits. We handle all permitting as part of our service.
          </p>

          <h2>The 30% Federal Tax Credit (ITC)</h2>
          <p>
            The most significant solar incentive is the{" "}
            <strong>Federal Investment Tax Credit</strong>. It covers 30% of
            your total installation cost — including panels, inverters,
            batteries, and labor. For a $24,000 system, that&apos;s a{" "}
            <strong>$7,200 tax credit</strong>.
          </p>
          <p>Key points about the ITC:</p>
          <ul>
            <li>
              It&apos;s a tax credit, not a deduction — it reduces your tax bill
              dollar-for-dollar
            </li>
            <li>
              You can claim it over multiple years if your tax liability is less
              than the credit amount
            </li>
            <li>
              The 30% rate is locked in through 2032, then steps down to 26% in
              2033 and 22% in 2034
            </li>
            <li>
              You must own the system (not lease it) to claim the credit
            </li>
          </ul>

          <h2>How Long Until It Pays for Itself?</h2>
          <p>
            The average payback period for solar in the U.S. is{" "}
            <strong>6-8 years</strong>. After that, your electricity is
            essentially free for the remaining 17-19 years of the system&apos;s
            life.
          </p>

          <p>
            Here&apos;s a real example: A 10kW system costing $21,000 after the
            ITC, saving $2,400/year, pays for itself in{" "}
            <strong>8.75 years</strong>. Over 25 years, that&apos;s{" "}
            <strong>$60,000 in total savings</strong>.
          </p>

          <h2>Is Solar Worth It for You?</h2>
          <p>Solar is worth it if:</p>
          <ul>
            <li>
              Your electricity rate is above $0.15/kWh (the national average is
              $0.17)
            </li>
            <li>You plan to stay in your home for 5+ years</li>
            <li>Your roof gets adequate sun exposure</li>
            <li>You can take advantage of the 30% tax credit</li>
          </ul>

          <div className="post-cta">
            <h3>Get a Free Solar Quote for Your Home</h3>
            <p>
              We&apos;ll analyze your roof, energy usage, and local incentives
              — 100% free, no obligation.
            </p>
            <Link href="/#contact-form" className="btn btn--primary btn--large">
              Get Free Quote →
            </Link>
          </div>

          <h2>Ready to Go Solar?</h2>
          <p>
            At Cosmic Ray Solar, we make the process simple. From free
            assessment to expert installation to net metering setup — we handle
            everything. Contact us today for a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="post-related">
        <div className="post-related__inner">
          <h2 className="heading-md">Related Guides</h2>
          <div className="post-related__grid">
            <Link href="/blog/battery-storage-guide" className="post-related__card">
              <span className="post-related__tag">Battery</span>
              <span className="post-related__title">Home Battery Storage: Is It Worth It?</span>
            </Link>
            <Link href="/blog/solar-tax-credits" className="post-related__card">
              <span className="post-related__tag">Savings</span>
              <span className="post-related__title">Solar Tax Credits 2025: How to Get 30% Off</span>
            </Link>
            <Link href="/blog/ev-charging-guide" className="post-related__card">
              <span className="post-related__tag">EV Charging</span>
              <span className="post-related__title">Charge Your EV With Solar: Complete Guide</span>
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
          <NewsletterForm />
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
              "How Much Do Solar Panels Cost in 2025? Complete Price Breakdown",
            description:
              "A detailed look at solar panel costs, factors that affect pricing, and how much you can expect to save over 25 years.",
            datePublished: "2025-01-15",
            dateModified: "2026-08-01",
            author: { "@type": "Organization", name: "Cosmic Ray Solar" },
            publisher: {
              "@type": "Organization",
              name: "Cosmic Ray Solar",
              url: "https://www.cosmicray.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.cosmicray.com/logo.png",
              },
            },
            wordCount: 1800,
            image:
              "https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.cosmicray.com/blog/solar-cost-guide",
            },
          }),
        }}
      />
    </>
  );
}
