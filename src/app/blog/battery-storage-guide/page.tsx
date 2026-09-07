import type { Metadata } from "next";
import BlogPostLayout, { generateBlogMetadata } from "@/components/BlogPostLayout";

export const metadata: Metadata = generateBlogMetadata({
  slug: "battery-storage-guide",
  title: "Home Battery Storage Guide: Is It Worth It?",
  description: "Home battery storage: is it worth it? Compare Tesla Powerwall, Enphase, and Generac. Learn costs, pros, cons, and whether battery storage makes sense for your home.",
  ogTitle: "Home Battery Storage Guide: Is It Worth It? | Cosmic Ray Solar",
  ogDescription: "Compare Tesla Powerwall, Enphase, and Generac. Costs, pros, cons, and whether battery storage makes sense for you.",
  publishedTime: "2025-01-22T08:00:00+00:00",
  modifiedTime: "2026-08-01T08:00:00+00:00",
});

export default function BatteryStorageGuidePage() {
  return (
    <BlogPostLayout
      slug="battery-storage-guide"
      title="Home Battery Storage: Is It Worth It? Pros, Cons & Costs"
      description="Everything you need to know about home battery storage — from how it works to whether the investment makes sense for your home."
      tag="Battery"
      date="2025-01-22"
      dateDisplay="January 22, 2025"
      readTime="7 min read"
      ogTitle="Home Battery Storage Guide: Is It Worth It? | Cosmic Ray Solar"
      ogDescription="Compare Tesla Powerwall, Enphase, and Generac. Costs, pros, cons, and whether battery storage makes sense for you."
      publishedTime="2025-01-22T08:00:00+00:00"
      modifiedTime="2026-08-01T08:00:00+00:00"
    >
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
        <li>Your solar panels generate electricity during the day</li>
        <li>Any excess energy goes into your battery instead of the grid</li>
        <li>At night (or during an outage), your home draws power from the battery</li>
        <li>If the battery is full and panels are still producing, excess goes to the grid (earning you credits under net metering)</li>
      </ol>

      <h2>Battery Comparison: Tesla vs Enphase vs Generac</h2>
      <div className="post-table-wrap">
        <table className="post-table">
          <thead>
            <tr><th>Feature</th><th>Tesla Powerwall 3</th><th>Enphase IQ 5P</th><th>Generac PWRcell</th></tr>
          </thead>
          <tbody>
            <tr><td>Capacity</td><td>13.5 kWh</td><td>5 kWh (expandable)</td><td>9 kWh</td></tr>
            <tr><td>Power Output</td><td>11.5 kW</td><td>3.84 kW</td><td>4.5 kW</td></tr>
            <tr><td>Price</td><td>~$8,500</td><td>~$4,800</td><td>~$5,200</td></tr>
            <tr><td>Warranty</td><td>10 years</td><td>15 years</td><td>10 years</td></tr>
            <tr><td>Best For</td><td>Whole-home backup</td><td>Modular expansion</td><td>Mid-range option</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Pros of Battery Storage</h2>
      <ul>
        <li><strong>Backup power during outages:</strong> Your lights stay on when the grid goes down</li>
        <li><strong>Maximize solar self-consumption:</strong> Use your own solar energy instead of selling it to the grid at low rates</li>
        <li><strong>Time-of-use optimization:</strong> Store cheap daytime solar and use it during expensive evening peak hours</li>
        <li><strong>Increased home value:</strong> Homes with battery storage sell for more</li>
        <li><strong>SGIP rebates:</strong> California offers rebates up to $2,000-$4,000 for battery installations</li>
      </ul>

      <h2>Cons of Battery Storage</h2>
      <ul>
        <li><strong>High upfront cost:</strong> $4,800-$10,000+ depending on the system</li>
        <li><strong>Limited capacity:</strong> Most batteries can&apos;t power your entire home for very long during an outage</li>
        <li><strong>Battery degradation:</strong> Batteries lose capacity over time (typically 2-3% per year)</li>
        <li><strong>Not always cost-effective:</strong> If your utility has low time-of-use rates, the payback period may be very long</li>
      </ul>

      <h2>When Battery Storage IS Worth It</h2>
      <ul>
        <li>You experience frequent power outages in your area</li>
        <li>Your utility has high time-of-use rates (like California&apos;s TOU-D-Prime at $0.54/kWh peak)</li>
        <li>You want true energy independence</li>
        <li>You can take advantage of SGIP or other battery rebates</li>
        <li>You&apos;re pairing it with an EV charger to avoid peak demand charges</li>
      </ul>

      <h2>When Battery Storage ISN&apos;T Worth It</h2>
      <ul>
        <li>Your area has reliable grid power and few outages</li>
        <li>Your utility offers favorable net metering (full retail credit for excess solar)</li>
        <li>Your budget is tight — put the money toward more panels instead</li>
        <li>You rarely use electricity during peak hours</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Home Battery Storage: Is It Worth It? Pros, Cons & Costs",
            description: "Everything you need to know about home battery storage.",
            datePublished: "2025-01-22",
            dateModified: "2026-08-01",
            author: { "@type": "Organization", name: "Cosmic Ray Solar" },
            publisher: { "@type": "Organization", name: "Cosmic Ray Solar", url: "https://www.cosmicray.com", logo: { "@type": "ImageObject", url: "https://www.cosmicray.com/logo.png" } },
            wordCount: 1500,
            image: "https://images.pexels.com/photos/9800025/pexels-photo-9800025.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.cosmicray.com/blog/battery-storage-guide" },
          }),
        }}
      />
    </BlogPostLayout>
  );
}
