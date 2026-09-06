"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "/blog/solar-cost-guide",
    image: "https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg",
    alt: "Solar panels on residential rooftop",
    tag: "Guide",
    date: "2025-01-15",
    dateDisplay: "Jan 15, 2025",
    title: "How Much Do Solar Panels Cost in 2025? Complete Price Breakdown",
    excerpt: "A detailed look at solar panel costs, factors that affect pricing, and how much you can expect to save over 25 years.",
    category: "guide",
  },
  {
    slug: "/blog/battery-storage-guide",
    image: "https://images.pexels.com/photos/9800025/pexels-photo-9800025.jpeg",
    alt: "Tesla Powerwall battery storage system",
    tag: "Battery",
    date: "2025-01-22",
    dateDisplay: "Jan 22, 2025",
    title: "Home Battery Storage: Is It Worth It? Pros, Cons & Costs",
    excerpt: "Everything you need to know about home battery storage — from how it works to whether the investment makes sense for your home.",
    category: "battery",
  },
  {
    slug: "/blog/solar-tax-credits",
    image: "https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg",
    alt: "Solar panels in bright sunlight",
    tag: "Savings",
    date: "2025-02-01",
    dateDisplay: "Feb 1, 2025",
    title: "Solar Tax Credits 2025: How to Get 30% Off Your Installation",
    excerpt: "The federal ITC covers 30% of your solar installation cost. Here's how to qualify, apply, and maximize your savings.",
    category: "savings",
  },
  {
    slug: "/blog/ev-charging-guide",
    image: "https://images.pexels.com/photos/27355836/pexels-photo-27355836.jpeg",
    alt: "EV charger connected to electric car",
    tag: "EV Charging",
    date: "2025-02-10",
    dateDisplay: "Feb 10, 2025",
    title: "Charge Your EV With Solar: Complete Home Charging Guide",
    excerpt: "Pair your solar system with an EV charger and drive on sunshine. We cover costs, chargers, and how to maximize savings.",
    category: "ev",
  },
];

const filters = [
  { key: null, label: "All Posts" },
  { key: "guide", label: "Guides" },
  { key: "savings", label: "Savings" },
  { key: "battery", label: "Battery" },
  { key: "ev", label: "EV Charging" },
];

export default function BlogListing() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const filteredPosts = activeFilter === null ? posts : posts.filter((p) => p.category === activeFilter);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    if (!emailInput?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailInput.classList.add("error");
      emailInput.focus();
      return;
    }
    emailInput.classList.remove("error");
    setNewsletterStatus("sending");
    const formData = new FormData(form);
    formData.append("_subject", "New Newsletter Subscriber");
    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setNewsletterStatus("sent");
        form.reset();
        setTimeout(() => setNewsletterStatus("idle"), 3000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumbs__inner">
          <ol className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumbs__item" aria-current="page">
              Blog
            </li>
          </ol>
        </div>
      </nav>

      <section className="blog-hero">
        <div className="blog-hero__inner">
          <h1 className="heading-xl heading-xl--light">Solar Insights &amp; Guides</h1>
          <p>Expert advice on solar energy, battery storage, EV charging, and reducing your electricity bills. Written by certified solar professionals.</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-section__inner">
          <div className="blog-filters">
            {filters.map((f) => (
              <button
                key={f.label}
                className={`blog-filter${activeFilter === f.key ? " active" : ""}`}
                onClick={() => setActiveFilter(activeFilter === f.key ? null : f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-card__img">
                  <Link href={post.slug}>
                    <Image src={post.image} alt={post.alt} width={600} height={340} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </Link>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__tag">{post.tag}</span>
                    <time dateTime={post.date}>{post.dateDisplay}</time>
                  </div>
                  <h2 className="blog-card__title">
                    <Link href={post.slug}>{post.title}</Link>
                  </h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link href={post.slug} className="blog-card__read">
                    Read More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter__inner">
          <h2 className="heading-xl">Stay Informed</h2>
          <p className="subheading">Get the latest solar tips, guides, and news delivered to your inbox.</p>
          {newsletterStatus === "sent" ? (
            <p style={{ color: "var(--color-primary)", fontWeight: 600 }}>Thanks for subscribing!</p>
          ) : (
            <form className="newsletter__form" onSubmit={handleNewsletterSubmit}>
              <input type="email" name="email" placeholder="Enter your email" aria-label="Email address" required />
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
              <button type="submit" className="btn btn--primary" disabled={newsletterStatus === "sending"}>
                {newsletterStatus === "sending" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
          <p className="newsletter__disclaimer">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__noise" />
        <div className="cta-section__inner">
          <span className="label label--dark">Ready to Go Solar?</span>
          <h2 className="heading-xl heading-xl--light">Start Saving With Solar Today</h2>
          <p className="subheading subheading--light">Get a free, no-obligation quote and see how much you can save with solar energy.</p>
          <div className="cta-section__actions">
            <Link href="/#contact-form" className="btn btn--accent btn--large">Get Free Quote</Link>
            <Link href="/about" className="btn btn--outline-light btn--large">Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
