import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Financing Options",
  description:
    "Solar financing options from Cosmic Ray Solar. $0 down, low monthly payments, leases, and PPAs. Make solar affordable.",
  openGraph: {
    title: "Financing Options | Cosmic Ray Solar",
    description:
      "Solar financing options from Cosmic Ray Solar. $0 down, low monthly payments, leases, and PPAs. Make solar affordable.",
    type: "website",
    url: "https://www.cosmicray.com/financing",
    siteName: "Cosmic Ray Solar",
    locale: "en_US",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Financing Options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Financing Options | Cosmic Ray Solar",
    description:
      "Solar financing options from Cosmic Ray Solar. $0 down, low monthly payments, leases, and PPAs. Make solar affordable.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/financing",
  },
};

export default function FinancingPage() {
  return (
    <>
      <ScrollReveal />

      <Breadcrumbs items={[{ label: "Financing" }]} />

      {/* Financing Hero */}
      <section className="fin-hero">
        <div className="fin-hero__inner" data-reveal>
          <span className="label">Flexible Options</span>
          <h1 className="heading-xl">Solar Financing</h1>
          <p className="subheading">
            Make solar affordable with flexible payment plans designed for every
            budget.
          </p>
        </div>
      </section>

      {/* Financing Options */}
      <section className="fin-options">
        <div className="fin-options__inner">
          <div className="fin-options__header" data-reveal>
            <span className="label">Choose Your Path</span>
            <h2 className="heading-xl">Financing Options</h2>
            <p className="subheading">
              We offer three ways to go solar — pick the one that fits your
              budget and goals.
            </p>
          </div>
          <div className="fin-options__grid">
            {/* Cash Purchase */}
            <div className="fin-card" data-reveal data-reveal-delay="1">
              <div className="fin-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <h3>Cash Purchase</h3>
              <p>
                Own your system outright and maximize your long-term savings
                with a one-time investment.
              </p>
              <ul className="fin-card__features">
                <li>Full ownership from day one</li>
                <li>Maximum lifetime savings</li>
                <li>30% federal tax credit</li>
                <li>Highest return on investment</li>
                <li>Increase home value immediately</li>
              </ul>
              <Link href="/#contact-form" className="btn btn--primary btn--full">
                Get a Quote
              </Link>
            </div>
            {/* Solar Loan */}
            <div
              className="fin-card fin-card--featured"
              data-reveal
              data-reveal-delay="2"
            >
              <div className="fin-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <h3>Solar Loan</h3>
              <p>
                Finance your system with $0 down and own it while making
                affordable fixed monthly payments.
              </p>
              <ul className="fin-card__features">
                <li>$0 down payment</li>
                <li>Own the system immediately</li>
                <li>Fixed monthly payments</li>
                <li>30% federal tax credit</li>
                <li>Terms from 5 to 25 years</li>
              </ul>
              <Link href="/#contact-form" className="btn btn--primary btn--full">
                Get a Quote
              </Link>
            </div>
            {/* Solar Lease / PPA */}
            <div className="fin-card" data-reveal data-reveal-delay="3">
              <div className="fin-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Solar Lease / PPA</h3>
              <p>
                Go solar with $0 down and no ownership responsibilities — just
                pay for the power you use.
              </p>
              <ul className="fin-card__features">
                <li>$0 down payment</li>
                <li>No system ownership required</li>
                <li>Pay only for power produced</li>
                <li>Free maintenance included</li>
                <li>Immediate monthly savings</li>
              </ul>
              <Link href="/#contact-form" className="btn btn--primary btn--full">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="fin-steps">
        <div className="fin-steps__inner">
          <div className="fin-steps__header" data-reveal>
            <span className="label">Simple Process</span>
            <h2 className="heading-xl">How Financing Works</h2>
            <p className="subheading">
              Getting approved for solar financing is quick and easy.
            </p>
          </div>
          <div className="fin-steps__grid">
            <div className="fin-step" data-reveal data-reveal-delay="1">
              <div className="fin-step__number">1</div>
              <h3>Free Consultation</h3>
              <p>
                We assess your energy needs, discuss your budget, and recommend
                the best financing option for your situation.
              </p>
            </div>
            <div className="fin-step" data-reveal data-reveal-delay="2">
              <div className="fin-step__number">2</div>
              <h3>Quick Approval</h3>
              <p>
                Submit a simple application and get approved within 24-48 hours.
                We work with multiple lenders to find your best rate.
              </p>
            </div>
            <div className="fin-step" data-reveal data-reveal-delay="3">
              <div className="fin-step__number">3</div>
              <h3>Start Saving</h3>
              <p>
                Once approved, we handle installation and activation. You begin
                saving on your electricity bills from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fin-faq">
        <div className="fin-faq__inner">
          <div className="fin-faq__header" data-reveal>
            <span className="label">Common Questions</span>
            <h2 className="heading-xl">Financing FAQ</h2>
            <p className="subheading">
              Everything you need to know about financing your solar system.
            </p>
          </div>
          <div data-reveal>
            <details>
              <summary>What credit score do I need?</summary>
              <p>
                Most financing options require a credit score of 650+. We work
                with multiple lenders to find the best option for your
                situation.
              </p>
            </details>
            <details>
              <summary>How much can I save with solar?</summary>
              <p>
                Most homeowners save $20,000–$50,000 over the lifetime of
                their solar system. Your exact savings depend on your energy
                usage, system size, and local utility rates.
              </p>
            </details>
            <details>
              <summary>What happens if I sell my home?</summary>
              <p>
                Solar panels increase home value by an average of 4.1%. Your
                financing can be transferred to the new homeowner, or you can
                pay off the balance at closing.
              </p>
            </details>
            <details>
              <summary>Are there tax credits available?</summary>
              <p>
                Yes! The federal Investment Tax Credit (ITC) allows you to
                deduct 30% of your solar system cost from your federal taxes.
                Many states offer additional incentives.
              </p>
            </details>
            <details>
              <summary>How long does installation take?</summary>
              <p>
                Most residential installations are completed in 1–3 days. The
                entire process from contract to activation typically takes 4–8
                weeks.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fin-cta">
        <div className="fin-cta__inner" data-reveal>
          <h2 className="heading-xl">Ready to Go Solar?</h2>
          <p>
            Get a free quote today and discover which financing option is right
            for you. Start saving with solar — $0 down available.
          </p>
          <div className="city-cta__actions">
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Quote
            </Link>
            <a
              href="tel:+15551234567"
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
