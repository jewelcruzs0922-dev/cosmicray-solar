import type { Metadata } from "next";
import BlogPostLayout, { generateBlogMetadata } from "@/components/BlogPostLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = generateBlogMetadata({
  slug: "solar-cost-guide",
  title: "How Much Do Solar Panels Cost in 2025?",
  description: "How much do solar panels cost in 2025? Complete price breakdown by system size, factors affecting cost, and how much you'll save over 25 years.",
  ogTitle: "How Much Do Solar Panels Cost in 2025? | Cosmic Ray Solar",
  ogDescription: "Complete price breakdown by system size, factors affecting cost, and how much you'll save over 25 years.",
  publishedTime: "2025-01-15T08:00:00+00:00",
  modifiedTime: "2026-08-01T08:00:00+00:00",
});

export default function SolarCostGuidePage() {
  return (
    <BlogPostLayout
      slug="solar-cost-guide"
      title="How Much Do Solar Panels Cost in 2025? Complete Price Breakdown"
      description="A detailed look at solar panel costs, factors that affect pricing, and how much you can expect to save over 25 years."
      tag="Guide"
      date="2025-01-15"
      dateDisplay="January 15, 2025"
      readTime="8 min read"
      ogTitle="How Much Do Solar Panels Cost in 2025? | Cosmic Ray Solar"
      ogDescription="Complete price breakdown by system size, factors affecting cost, and how much you'll save over 25 years."
      publishedTime="2025-01-15T08:00:00+00:00"
      modifiedTime="2026-08-01T08:00:00+00:00"
    >
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

      <div className="post-table-wrap">
        <table className="post-table">
          <thead>
            <tr>
              <th>System Size</th>
              <th>Avg. Cost (Before ITC)</th>
              <th>After 30% ITC</th>
              <th>Typical Home</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>4 kW</td><td>$12,000</td><td>$8,400</td><td>Small home / condo</td></tr>
            <tr><td>6 kW</td><td>$18,000</td><td>$12,600</td><td>Average home</td></tr>
            <tr><td>8 kW</td><td>$24,000</td><td>$16,800</td><td>Medium home</td></tr>
            <tr><td>10 kW</td><td>$30,000</td><td>$21,000</td><td>Large home</td></tr>
            <tr><td>12 kW</td><td>$36,000</td><td>$25,200</td><td>Large home / EV owner</td></tr>
          </tbody>
        </table>
      </div>

      <p>
        The average residential solar installation in the U.S. costs about{" "}
        <strong>$3.00 per watt</strong> before incentives. With the 30%
        federal ITC, that drops to about <strong>$2.10 per watt</strong>.
      </p>

      <h2>What Affects the Price?</h2>
      <p>Several factors influence your final cost:</p>

      <h3>1. System Size</h3>
      <p>Bigger systems cost more upfront but produce more energy. A 10kW system costs more than a 6kW system, but it may offset 100% of your electricity bill instead of 70%.</p>

      <h3>2. Panel Type</h3>
      <p>Premium panels like SunPower Maxeon cost more per watt ($0.40-$0.50/watt) but offer higher efficiency (22%+) and longer warranties. Budget panels like Canadian Solar cost less ($0.25-$0.35/watt) with slightly lower efficiency (19-20%).</p>

      <h3>3. Roof Condition</h3>
      <p>If your roof needs repair or replacement before installation, that adds to the total cost. We coordinate with roofing partners to bundle the work and save you money.</p>

      <h3>4. Battery Storage</h3>
      <p>Adding a home battery (like Tesla Powerwall at ~$8,500 or Enphase IQ Battery at ~$4,800) increases the upfront cost but provides backup power during outages and maximizes your solar self-consumption.</p>

      <h3>5. Location &amp; Permits</h3>
      <p>Permit costs vary by city. Some areas charge $500-$2,000 for solar permits. We handle all permitting as part of our service.</p>

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
        <li>It&apos;s a tax credit, not a deduction — it reduces your tax bill dollar-for-dollar</li>
        <li>You can claim it over multiple years if your tax liability is less than the credit amount</li>
        <li>The 30% rate is locked in through 2032, then steps down to 26% in 2033 and 22% in 2034</li>
        <li>You must own the system (not lease it) to claim the credit</li>
      </ul>

      <h2>How Long Until It Pays for Itself?</h2>
      <p>
        The average payback period for solar in the U.S. is{" "}
        <strong>6-8 years</strong>. After that, your electricity is
        essentially free for the remaining 17-19 years of the system&apos;s life.
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
        <li>Your electricity rate is above $0.15/kWh (the national average is $0.17)</li>
        <li>You plan to stay in your home for 5+ years</li>
        <li>Your roof gets adequate sun exposure</li>
        <li>You can take advantage of the 30% tax credit</li>
      </ul>

      <h2>Ready to Go Solar?</h2>
      <p>
        At Cosmic Ray Solar, we make the process simple. From free
        assessment to expert installation to net metering setup — we handle
        everything. Contact us today for a free, no-obligation quote.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "How Much Do Solar Panels Cost in 2025? Complete Price Breakdown",
            description: "A detailed look at solar panel costs, factors that affect pricing, and how much you can expect to save over 25 years.",
            datePublished: "2025-01-15",
            dateModified: "2026-08-01",
            author: { "@type": "Organization", name: "Cosmic Ray Solar" },
            publisher: { "@type": "Organization", name: "Cosmic Ray Solar", url: `${SITE_URL}`, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
            wordCount: 1800,
            image: "https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2",
            mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/solar-cost-guide` },
          }),
        }}
      />
    </BlogPostLayout>
  );
}
