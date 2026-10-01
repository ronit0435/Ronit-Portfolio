import React, { useState } from "react";
import { ExternalLink, X, Globe, Maximize2, ShieldCheck } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  onClose,
}) => {
  const [iframeError, setIframeError] = useState(false);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl h-[88vh] rounded-2xl glass-panel border border-[var(--color-gold)]/40 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Mockup Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] shrink-0">
          <div className="flex items-center gap-3">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>

            {/* Address Bar Simulation */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] font-mono max-w-md truncate">
              <Globe className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span className="truncate">{project.liveUrl}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-gold)] text-[#080A0F] text-xs font-semibold hover:opacity-95 transition-opacity"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split / Iframe & Summary */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Main Interactive Preview Frame */}
          <div className="flex-1 bg-white relative flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)]">
            {!iframeError ? (
              <iframe
                src={project.liveUrl}
                title={`${project.name} live preview`}
                className="w-full h-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                onError={() => setIframeError(true)}
              />
            ) : (
              <div className="p-8 text-center max-w-md bg-[var(--bg-primary)] h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold font-display text-[var(--text-primary)] mb-2">
                  {project.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  Direct iframe preview was restricted by GitHub Pages security policies. You can launch the full live project directly:
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-gold)] text-[#080A0F] font-semibold text-xs uppercase tracking-wider hover:opacity-95"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="w-full lg:w-80 p-6 bg-[var(--bg-card)] flex flex-col justify-between overflow-y-auto shrink-0 border-t lg:border-t-0">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-gold)]">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mt-1">
                  {project.name}
                </h3>
                <p className="text-xs text-[var(--color-gold)] font-medium mt-0.5">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] block">
                  Key Design Features
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-gold)] font-bold">·</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] block mb-2">
                  Tags
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-[var(--text-secondary)]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/[0.04] border border-[var(--border-subtle)] text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[var(--color-gold)] text-[#080A0F] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
