import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cosmic Ray — our story, mission, team, and journey from a small garage to a nationwide solar leader powering 2,400+ homes.",
  openGraph: {
    title: "About Us | Cosmic Ray Solar",
    description:
      "From a single garage installation to a nationwide movement — discover the people behind Cosmic Ray.",
    type: "website",
    url: "https://www.cosmicray.com/about",
    siteName: "Cosmic Ray Solar",
    locale: "en_US",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "About Us | Cosmic Ray Solar",
    description:
      "From a single garage installation to a nationwide movement — discover the people behind Cosmic Ray.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/about",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cosmic Ray Solar",
  url: "https://www.cosmicray.com",
  logo: "https://www.cosmicray.com/logo.png",
  description:
    "Cosmic Ray Solar is a nationwide solar energy company powering 2,400+ homes across 15 states with clean, renewable energy.",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Marcus Chen",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Solar Avenue",
    addressLocality: "Sunshine City",
    addressRegion: "CA",
    postalCode: "90210",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/cosmicraysolar",
    "https://www.instagram.com/cosmicraysolar",
    "https://www.linkedin.com/company/cosmicraysolar",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <ScrollReveal />

      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* About Page Hero */}
      <section className="about-hero">
        <div className="about-hero__orb about-hero__orb--1" />
        <div className="about-hero__orb about-hero__orb--2" />
        <div className="about-hero__inner">
          <span className="about-hero__label">Our Story</span>
          <h1 className="about-hero__title">
            Powering Homes,
            <br />
            Empowering Futures
          </h1>
          <p className="about-hero__sub">
            From a single garage installation to a nationwide movement —
            discover the people, purpose, and passion behind Cosmic Ray.
          </p>
        </div>
        <div className="about-hero__wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,60 C360,100 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,100 L0,100 Z"
              fill="#faf9f6"
            />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__content" data-reveal="left">
            <span className="label">Where It All Began</span>
            <h2 className="heading-xl">Our Story</h2>
            <p>
              Cosmic Ray was born in a small garage in Sunshine City,
              California. In 2012, our founder{" "}
              <strong>Marcus Chen</strong> — a former NASA engineer — watched
              his elderly neighbor struggle with skyrocketing electricity
              bills. Determined to help, he designed and installed a small
              solar system on her rooftop for free.
            </p>
            <p>
              Within months, her bills dropped by 70%. Word spread quickly. By
              the end of that year, Marcus had installed systems on 12 homes in
              his neighborhood. He realized that solar energy wasn&apos;t just
              for the wealthy — it was a necessity for everyone.
            </p>
            <p>
              That&apos;s when Cosmic Ray was officially born. What started as
              one man&apos;s mission to help a neighbor has grown into a
              nationwide movement — 150+ team members, 15 states, and 2,400+
              homes powered by clean, renewable energy.
            </p>
          </div>
          <div className="about-story__visual" data-reveal="right">
            <div className="about-story__gallery">
              <div className="about-story__img-main">
                <Image
                  src="https://images.pexels.com/photos/8853507/pexels-photo-8853507.jpeg"
                  alt="Solar technician working on rooftop installation"
                  width="700"
                  height="500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-story__img-accent">
                <Image
                  src="https://images.pexels.com/photos/8853510/pexels-photo-8853510.jpeg"
                  alt="Team of technicians collaborating"
                  width="400"
                  height="280"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-story__img-badge">
                <span className="about-story__badge-num">14+</span>
                <span className="about-story__badge-text">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-mission">
        <div className="about-mission__inner">
          <div className="about-mission__header" data-reveal>
            <span className="label">What Drives Us</span>
            <h2 className="heading-xl">Mission &amp; Values</h2>
          </div>
          <div className="about-mission__grid">
            <div className="about-mission__card" data-reveal data-reveal-delay="1">
              <h3>Our Mission</h3>
              <p>
                To make clean, renewable solar energy accessible and affordable
                for every homeowner in America. We believe that switching to
                solar should be simple, stressless, and financially rewarding.
                That&apos;s why we handle everything from design to installation
                to maintenance — so you can focus on what matters most.
              </p>
            </div>
            <div className="about-mission__card" data-reveal data-reveal-delay="2">
              <h3>Our Vision</h3>
              <p>
                A world where every home is powered by the sun. Where energy is
                clean, bills are low, and communities thrive. We&apos;re not
                just installing panels — we&apos;re building a sustainable
                future for the next generation.
              </p>
            </div>
          </div>
          <div className="about-values__header" data-reveal>
            <h2 className="heading-xl">Our Core Values</h2>
          </div>
          <div className="about-values__grid">
            <div className="about-value-card" data-reveal data-reveal-delay="1">
              <div className="about-value-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <strong>Licensed &amp; Insured</strong>
              <span>Fully certified in all 50 states</span>
            </div>
            <div className="about-value-card" data-reveal data-reveal-delay="2">
              <div className="about-value-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <strong>Same-Day Response</strong>
              <span>We answer every call within hours</span>
            </div>
            <div className="about-value-card" data-reveal data-reveal-delay="3">
              <div className="about-value-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <strong>Community Focused</strong>
              <span>Proud sponsor of local schools</span>
            </div>
            <div className="about-value-card" data-reveal data-reveal-delay="4">
              <div className="about-value-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <strong>25-Year Warranty</strong>
              <span>Industry-leading performance guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="about-journey">
        <div className="about-journey__inner">
          <div className="about-journey__header" data-reveal>
            <span className="label">Milestones</span>
            <h2 className="heading-xl">Our Journey</h2>
            <p className="subheading">
              From a single garage installation to a nationwide solar leader.
            </p>
          </div>
          <div className="about-journey__track">
            <div className="about-journey__card" data-reveal data-reveal-delay="1">
              <div className="about-journey__card-img">
                <Image
                  src="https://images.pexels.com/photos/29206488/pexels-photo-29206488.jpeg"
                  alt="Technician installing first solar panel"
                  width="600"
                  height="420"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-journey__card-body">
                <span className="about-journey__year">2012</span>
                <h3>Founded in a Garage</h3>
                <p>
                  Marcus installs his first solar system on a neighbor&apos;s
                  home, sparking the idea for Cosmic Ray. The mission: make
                  solar energy accessible to every homeowner.
                </p>
              </div>
            </div>
            <div className="about-journey__card" data-reveal data-reveal-delay="2">
              <div className="about-journey__card-img">
                <Image
                  src="https://images.pexels.com/photos/8853536/pexels-photo-8853536.jpeg"
                  alt="Two technicians installing rooftop solar panels"
                  width="600"
                  height="420"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-journey__card-body">
                <span className="about-journey__year">2014</span>
                <h3>First 100 Homes</h3>
                <p>
                  Celebrated our 100th residential installation and hired our
                  first full-time team of 5. The garage era was over — Cosmic
                  Ray was a real company.
                </p>
              </div>
            </div>
            <div className="about-journey__card" data-reveal data-reveal-delay="3">
              <div className="about-journey__card-img">
                <Image
                  src="https://images.pexels.com/photos/6961088/pexels-photo-6961088.jpeg"
                  alt="Team installing solar panels on large rooftop"
                  width="600"
                  height="420"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-journey__card-body">
                <span className="about-journey__year">2017</span>
                <h3>Expanded to 5 States</h3>
                <p>
                  Opened offices in Nevada, Arizona, Texas, and Colorado. Our
                  team grew to 45 members, and we were installing 100+ systems
                  per month.
                </p>
              </div>
            </div>
            <div className="about-journey__card" data-reveal data-reveal-delay="4">
              <div className="about-journey__card-img">
                <Image
                  src="https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg"
                  alt="Workers completing solar installation"
                  width="600"
                  height="420"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-journey__card-body">
                <span className="about-journey__year">2019</span>
                <h3>1,000th Installation</h3>
                <p>
                  Reached the milestone of 1,000 homes powered by Cosmic Ray
                  solar systems. We celebrated by planting 10,000 trees across
                  our service areas.
                </p>
              </div>
            </div>
            <div className="about-journey__card" data-reveal data-reveal-delay="5">
              <div className="about-journey__card-img">
                <Image
                  src="https://images.pexels.com/photos/6158914/pexels-photo-6158914.jpeg"
                  alt="Professional solar team on project site"
                  width="600"
                  height="420"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-journey__card-body">
                <span className="about-journey__year">2022</span>
                <h3>Nationwide Expansion</h3>
                <p>
                  Now serving 15 states with 150+ team members. We launched our
                  battery storage division and began offering complete home
                  energy solutions.
                </p>
              </div>
            </div>
            <div className="about-journey__card" data-reveal data-reveal-delay="6">
              <div className="about-journey__card-img">
                <Image
                  src="https://images.pexels.com/photos/35237908/pexels-photo-35237908.jpeg"
                  alt="Modern residential solar installation"
                  width="600"
                  height="420"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="about-journey__card-body">
                <span className="about-journey__year">2024</span>
                <h3>Industry Leader</h3>
                <p>
                  Named &quot;Top Solar Installer&quot; by Solar Power World.
                  With 2,400+ homes powered, we&apos;re just getting started on
                  our mission to democratize solar energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team__inner">
          <div className="about-team__header" data-reveal>
            <span className="label">The People Behind the Panels</span>
            <h2 className="heading-xl">Meet Our Team</h2>
            <p className="subheading">
              The passionate people behind every installation.
            </p>
          </div>
          <div className="about-team__grid">
            <div className="about-team__member" data-reveal data-reveal-delay="1">
              <div className="about-team__photo">
                <Image
                  src="https://images.pexels.com/photos/29267512/pexels-photo-29267512.jpeg"
                  alt="Marcus Chen, Founder & CEO"
                  width="500"
                  height="625"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="about-team__overlay">
                  <p>
                    Former NASA engineer with 15+ years in renewable energy.
                    Holds 3 patents in solar cell efficiency. Passionate about
                    making clean energy accessible to all.
                  </p>
                </div>
              </div>
              <div className="about-team__info">
                <strong>Marcus Chen</strong>
                <span>Founder &amp; CEO</span>
              </div>
            </div>
            <div className="about-team__member" data-reveal data-reveal-delay="2">
              <div className="about-team__photo">
                <Image
                  src="https://images.pexels.com/photos/6592746/pexels-photo-6592746.jpeg"
                  alt="Sarah Martinez, Head of Operations"
                  width="500"
                  height="625"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="about-team__overlay">
                  <p>
                    14 years managing large-scale solar installations across
                    the West Coast. Expert in logistics optimization and team
                    leadership. Reduced install times by 40%.
                  </p>
                </div>
              </div>
              <div className="about-team__info">
                <strong>Sarah Martinez</strong>
                <span>Head of Operations</span>
              </div>
            </div>
            <div className="about-team__member" data-reveal data-reveal-delay="3">
              <div className="about-team__photo">
                <Image
                  src="https://images.pexels.com/photos/7691694/pexels-photo-7691694.jpeg"
                  alt="David Kim, Lead Engineer"
                  width="500"
                  height="625"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="about-team__overlay">
                  <p>
                    MIT graduate specializing in residential solar design and
                    energy storage. Has designed systems for homes in 12 states.
                    Published 8 research papers on photovoltaic efficiency.
                  </p>
                </div>
              </div>
              <div className="about-team__info">
                <strong>David Kim</strong>
                <span>Lead Engineer</span>
              </div>
            </div>
            <div className="about-team__member" data-reveal data-reveal-delay="4">
              <div className="about-team__photo">
                <Image
                  src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg"
                  alt="James Wilson, Installation Director"
                  width="500"
                  height="625"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="about-team__overlay">
                  <p>
                    Led 3,000+ successful residential installations with zero
                    safety incidents. Former Marine turned solar advocate. Trains
                    our entire installation workforce.
                  </p>
                </div>
              </div>
              <div className="about-team__info">
                <strong>James Wilson</strong>
                <span>Installation Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <CountUp />
        <div className="about-stats__inner">
          <div className="about-stats__item" data-reveal data-reveal-delay="1">
            <span className="about-stats__num" data-count="2400">
              2,400
            </span>
            <span className="about-stats__plus">+</span>
            <span className="about-stats__label">Homes Powered</span>
          </div>
          <div className="about-stats__item" data-reveal data-reveal-delay="2">
            <span className="about-stats__num" data-count="150">
              150
            </span>
            <span className="about-stats__plus">+</span>
            <span className="about-stats__label">Team Members</span>
          </div>
          <div className="about-stats__item" data-reveal data-reveal-delay="3">
            <span className="about-stats__num" data-count="15">
              15
            </span>
            <span className="about-stats__plus" />
            <span className="about-stats__label">States Served</span>
          </div>
          <div className="about-stats__item" data-reveal data-reveal-delay="4">
            <span className="about-stats__num" data-count="98">
              98
            </span>
            <span className="about-stats__plus">%</span>
            <span className="about-stats__label">Satisfaction Rate</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta__inner" data-reveal>
          <h2 className="heading-xl">Ready to Join the Solar Revolution?</h2>
          <p>
            Let us design a custom solar solution for your home. Get a free
            quote today and start saving up to 75% on your electricity bills.
          </p>
          <div className="about-cta__actions">
            <Link href="/#contact-form" className="btn btn--primary btn--large">
              Get Free Quote
            </Link>
            <a
              href="tel:+1555123456"
              className="btn btn--outline btn--large"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
