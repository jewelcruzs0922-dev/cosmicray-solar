"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

type Filter = "all" | "residential" | "commercial";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags === activeFilter);

  return (
    <section className="projects-content">
      <div className="projects-content__inner">
        <div className="projects-content__filters" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={activeFilter === f.value}
              className={`projects-content__filter ${activeFilter === f.value ? "projects-content__filter--active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-content__grid">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
