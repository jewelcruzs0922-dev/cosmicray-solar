"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

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

  const filteredPosts = activeFilter === null ? blogPosts : blogPosts.filter((p) => p.category === activeFilter);

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
