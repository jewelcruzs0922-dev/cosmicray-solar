"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

type Filter = "all" | "residential" | "commercial";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags === activeFilter);

  return (
    <section className="project-gallery" aria-label="Project Gallery">
      <div className="project-gallery__inner">
        <div className="project-gallery__header">
          <span className="label">Our Work</span>
          <h2 className="heading-xl">Our Recent Installations</h2>
          <p className="subheading" style={{ margin: "0 auto" }}>
            Browse our portfolio of residential and commercial solar
            installations across the country.
          </p>
        </div>

        <div className="project-gallery__filters" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={activeFilter === f.value}
              className={`project-gallery__filter ${activeFilter === f.value ? "project-gallery__filter--active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="project-gallery__grid">
          {filtered.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__image">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <span className="project-card__tag">{project.tags}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </span>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__stats">
                  <div className="project-card__stat">
                    <span className="project-card__stat-value">{project.systemSize}kW</span>
                    <span className="project-card__stat-label">System</span>
                  </div>
                  <div className="project-card__stat">
                    <span className="project-card__stat-value">
                      ${project.annualSavings.toLocaleString()}
                    </span>
                    <span className="project-card__stat-label">Annual Savings</span>
                  </div>
                  <div className="project-card__stat">
                    <span className="project-card__stat-value">
                      ${project.beforeBill}→${project.afterBill}
                    </span>
                    <span className="project-card__stat-label">Monthly Bill</span>
                  </div>
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="btn btn--small btn--outline"
                >
                  View Details &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
