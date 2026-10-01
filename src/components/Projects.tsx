import React, { useState } from "react";
import { ExternalLink, Eye, ArrowUpRight, Globe, CheckCircle2 } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "../data/portfolioData";
import { ProjectPreviewModal } from "./ProjectPreviewModal";

export const Projects: React.FC = () => {
  const [selectedPreview, setSelectedPreview] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
            03 / SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight mb-4">
            Projects Built With Purpose.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            A collection of live website projects showcasing my approach to design,
            functionality, and digital experiences.
          </p>
        </div>

        {/* Clean Project Cards Grid (No Cover Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--color-gold)]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--color-gold)]/10"
            >
              <div>
                {/* Top Meta Row: Category & Live Indicator */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[var(--color-gold)] font-semibold px-2.5 py-1 rounded-lg bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20">
                    {project.category}
                  </span>

                  <div className="inline-flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>LIVE SITE</span>
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold font-display text-[var(--text-primary)] group-hover:text-[var(--color-gold)] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[var(--color-gold)] font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Live URL Link Box */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-5 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--color-gold)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono transition-colors group/url"
                >
                  <Globe className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                  <span className="truncate">{project.liveUrl}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-60 group-hover/url:opacity-100 transition-opacity shrink-0" />
                </a>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)] mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                    Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clean unboxed tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {idx < project.tags.length - 1 && (
                        <span className="opacity-40" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-gold)] text-[#080A0F] text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-all shadow-sm"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedPreview(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--color-gold)] text-xs text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </button>
              </div>
            </div>
          ))}

          {/* "More Projects Coming Soon" Card */}
          <div className="md:col-span-2 rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--bg-card)]/50 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
                <h4 className="text-lg font-bold font-display text-[var(--text-primary)]">
                  More Projects Coming Soon
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
                Currently developing additional website designs, e-commerce concepts,
                and digital campaigns. Check back regularly or explore ongoing
                initiatives on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/ronit0435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-subtle)] hover:border-[var(--color-gold)] bg-[var(--bg-card)] text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors shrink-0 shadow-sm"
            >
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Preview Lightbox Modal */}
      <ProjectPreviewModal
        project={selectedPreview}
        onClose={() => setSelectedPreview(null)}
      />
    </section>
  );
};
