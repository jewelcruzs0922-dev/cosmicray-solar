import type { Metadata } from "next";
import { SITE_URL, PHONE, PHONE_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cosmic Ray Solar Privacy Policy — how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Cosmic Ray Solar",
    description:
      "How we collect, use, and protect your personal information.",
    type: "website",
    url: `${SITE_URL}/privacy`,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Cosmic Ray Solar",
    description:
      "How we collect, use, and protect your personal information.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="legal-page__inner">
        <h1 className="heading-xl">Privacy Policy</h1>
        <span className="legal-updated">Last updated: January 1, 2025</span>

        <p>
          Cosmic Ray Solar (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website and use our services.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us
          when you:
        </p>
        <ul>
          <li>Fill out a contact or quote request form</li>
          <li>Subscribe to our newsletter</li>
          <li>Purchase products through our shop</li>
          <li>Contact us by phone, email, or other means</li>
        </ul>
        <p>This information may include:</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>
            Payment information (processed securely through third-party
            providers)
          </li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain
          information about your device and usage, including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring website or source</li>
          <li>Geographic location (approximate)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>
            Respond to your inquiries and provide quotes for solar installations
          </li>
          <li>Process transactions and send related information</li>
          <li>
            Send administrative information (appointment confirmations, service
            updates)
          </li>
          <li>Send marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Analyze usage trends and optimize user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>
          We do not sell your personal information. We may share your information
          with:
        </p>
        <ul>
          <li>
            <strong>Service providers:</strong> Third-party companies that help us
            operate our business (payment processors, email service providers,
            analytics tools)
          </li>
          <li>
            <strong>Installation partners:</strong> Certified installers in your
            area to fulfill service requests
          </li>
          <li>
            <strong>Legal requirements:</strong> When required by law, regulation,
            or legal process
          </li>
          <li>
            <strong>Business transfers:</strong> In connection with a merger,
            acquisition, or sale of assets
          </li>
        </ul>

        <h2>4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to:
        </p>
        <ul>
          <li>Remember your preferences and settings</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Deliver relevant advertising</li>
          <li>Improve our services</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling
          cookies may affect website functionality.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          personal information, including encryption, access controls, and secure
          data storage. However, no method of electronic transmission or storage
          is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. Your Rights and Choices</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications at any time</li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@cosmicray.com">privacy@cosmicray.com</a> or
          call <a href={`tel:${PHONE_LINK}`}>{PHONE}</a>.
        </p>

        <h2>7. California Residents (CCPA/CPRA)</h2>
        <p>
          If you are a California resident, you have additional rights under the
          California Consumer Privacy Act (CCPA) and the California Privacy
          Rights Act (CPRA), including the right to know what personal
          information is collected, the right to delete, and the right to opt out
          of the sale of personal information. We do not sell personal
          information.
        </p>

        <h2>8. Children&rsquo;s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 16. We do
          not knowingly collect personal information from children. If we become
          aware that we have collected information from a child, we will take
          steps to delete it promptly.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of those sites. We encourage you
          to read the privacy policies of any third-party sites you visit.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any material changes by posting the new policy on this page and
          updating the &ldquo;Last updated&rdquo; date. Your continued use of our
          services after changes constitutes acceptance of the updated policy.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices,
          please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@cosmicray.com">privacy@cosmicray.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${PHONE_LINK}`}>{PHONE}</a>
          </li>
          <li>
            <strong>Address:</strong> 123 Solar Avenue, Sunshine City, CA 90210
          </li>
        </ul>
      </div>
    </section>
  );
}
