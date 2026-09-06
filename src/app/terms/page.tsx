import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Cosmic Ray Solar Terms of Service — the terms governing your use of our website, products, and solar installation services.",
  openGraph: {
    title: "Terms of Service | Cosmic Ray Solar",
    description:
      "The terms governing your use of our website, products, and solar installation services.",
    type: "website",
    url: "https://www.cosmicray.com/terms",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Cosmic Ray Solar",
    description:
      "The terms governing your use of our website, products, and solar installation services.",
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.cosmicray.com/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-page__inner">
        <h1 className="heading-xl">Terms of Service</h1>
        <span className="legal-updated">Last updated: January 1, 2025</span>

        <p>
          Welcome to Cosmic Ray Solar. These Terms of Service (&ldquo;Terms&rdquo;)
          govern your use of our website, products, and services. By accessing our
          website or engaging our services, you agree to be bound by these Terms.
        </p>

        <h2>1. Services</h2>
        <p>
          Cosmic Ray Solar provides solar energy consultation, design,
          installation, and maintenance services for residential and commercial
          properties. We also sell solar equipment and accessories through our
          online shop.
        </p>
        <p>All solar installation services are subject to:</p>
        <ul>
          <li>Site assessment and approval</li>
          <li>Final design and engineering approval</li>
          <li>Necessary permits and regulatory approvals</li>
          <li>Execution of a separate installation agreement</li>
        </ul>

        <h2>2. Quotes and Estimates</h2>
        <p>
          Any quotes, estimates, or proposals provided through our website or
          other channels are non-binding and subject to change. Final pricing
          will be determined after a complete site assessment and included in
          your formal installation agreement.
        </p>

        <h2>3. Products and Purchases</h2>
        <h3>Pricing</h3>
        <p>
          All prices displayed on our website are in U.S. dollars and are subject
          to change without notice. We reserve the right to correct pricing
          errors. In the event of a pricing error, we will contact you before
          processing your order.
        </p>

        <h3>Payment</h3>
        <p>
          Payment for products is due at the time of purchase. We accept major
          credit cards and other payment methods as displayed at checkout. All
          payments are processed through secure third-party payment processors.
        </p>

        <h3>Shipping</h3>
        <p>
          Product shipping times are estimates and not guaranteed. We are not
          responsible for delays caused by carriers or customs. Risk of loss and
          title pass to you upon delivery to the carrier.
        </p>

        <h3>Returns</h3>
        <p>
          Products may be returned within 30 days of delivery in unused, original
          condition with all packaging. Return shipping costs are the
          responsibility of the buyer unless the return is due to our error.
          Custom or special-order items are non-returnable.
        </p>

        <h2>4. Warranties</h2>
        <h3>Product Warranties</h3>
        <p>
          Products sold through our shop carry the manufacturer&rsquo;s warranty.
          Warranty terms vary by product and manufacturer. Contact us for
          specific warranty details on any product.
        </p>

        <h3>Installation Warranty</h3>
        <p>
          Solar installation services include a 10-year workmanship warranty
          covering the quality of our installation work. This warranty is separate
          from manufacturer product warranties and begins on the date of system
          activation.
        </p>

        <h3>Disclaimer</h3>
        <p>
          Except as expressly stated in writing, all products and services are
          provided &ldquo;as is&rdquo; without warranties of any kind, either
          express or implied, including but not limited to implied warranties of
          merchantability or fitness for a particular purpose.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images,
          designs, and software, is the property of Cosmic Ray Solar and is
          protected by copyright, trademark, and other intellectual property
          laws. You may not reproduce, distribute, or create derivative works
          without our written permission.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Cosmic Ray Solar shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of our website or services. Our
          total liability shall not exceed the amount you paid for the specific
          product or service giving rise to the claim.
        </p>

        <h2>7. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Cosmic Ray Solar, its
          officers, directors, employees, and agents from any claims, losses, or
          damages arising from your use of our services or violation of these
          Terms.
        </p>

        <h2>8. SMS and Communication Consent</h2>
        <p>
          By providing your phone number and opting in to receive communications,
          you consent to receive SMS messages, phone calls, and emails from
          Cosmic Ray Solar regarding your inquiry, appointment, or service.
          Message frequency varies. Message and data rates may apply. You may opt
          out at any time by replying STOP to SMS messages or contacting us
          directly.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California,
          without regard to conflict of law principles. Any disputes shall be
          resolved in the state or federal courts located in Sunshine City,
          California.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be
          posted on this page with an updated effective date. Your continued use
          of our website or services after changes are posted constitutes
          acceptance of the revised Terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these Terms of Service, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:legal@cosmicray.com">legal@cosmicray.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1555123456">(555) 123-4567</a>
          </li>
          <li>
            <strong>Address:</strong> 123 Solar Avenue, Sunshine City, CA 90210
          </li>
        </ul>
      </div>
    </section>
  );
}
