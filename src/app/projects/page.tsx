import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsClient from "./ProjectsClient";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Projects",
  description: `Browse solar installation projects by ${SITE_NAME}. See real results, system sizes, and savings from residential and commercial installations.`,
  openGraph: {
    title: `Our Projects | ${SITE_NAME}`,
    description: "Browse our portfolio of residential and commercial solar installations.",
    type: "website",
    url: `${SITE_URL}/projects`,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${SITE_NAME} — Our Projects` }],
  },
  twitter: { card: "summary_large_image", title: `Our Projects | ${SITE_NAME}`, description: "Browse our portfolio of solar installations.", images: [`${SITE_URL}/opengraph-image`] },
  alternates: { canonical: `${SITE_URL}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Our Projects" }]} />

      <section className="projects-hero">
        <div className="projects-hero__inner">
          <span className="label label--light">Our Work</span>
          <h1 className="heading-xl heading-xl--light">Our Projects</h1>
          <p className="subheading subheading--light">
            Browse our portfolio of residential and commercial solar installations
            across the country.
          </p>
        </div>
      </section>

      <ProjectsClient />
    </>
  );
}
