import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

interface BlogPostLayoutProps {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  dateDisplay: string;
  readTime: string;
  ogTitle: string;
  ogDescription: string;
  publishedTime: string;
  modifiedTime: string;
  children: React.ReactNode;
}

export function generateBlogMetadata(post: { slug: string; title: string; description: string; ogTitle: string; ogDescription: string; publishedTime: string; modifiedTime: string }) {
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      type: "article" as const,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.publishedTime,
      modifiedTime: post.modifiedTime,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Cosmic Ray Solar — ${post.title}` }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.ogTitle,
      description: post.ogDescription,
      images: [`${SITE_URL}/opengraph-image`],
    },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default function BlogPostLayout({ slug, title, description, tag, date, dateDisplay, readTime, publishedTime, modifiedTime, children }: BlogPostLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: { "@type": "Organization", name: "Cosmic Ray Solar", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Cosmic Ray Solar", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: title }]} />

      <section className="post-hero">
        <div className="post-hero__inner">
          <div className="post-hero__meta">
            <span className="post-hero__tag">{tag}</span>
            <time dateTime={date}>{dateDisplay}</time>
            <span>{readTime}</span>
          </div>
          <h1 className="heading-xl heading-xl--light">{title}</h1>
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

          {children}

          <div className="post-cta">
            <h3>Ready to Go Solar?</h3>
            <p>Get a free, no-obligation quote and see how much you can save.</p>
            <Link href="/#contact-form" className="btn btn--primary btn--large">Get Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter__inner">
          <h2 className="heading-xl">Stay Informed</h2>
          <p className="subheading">Get the latest solar tips, guides, and news delivered to your inbox.</p>
          <NewsletterForm />
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
