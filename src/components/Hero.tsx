import React from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import { Hero3DCanvas } from "./Hero3DCanvas";
import { PORTFOLIO_HERO } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingBadges = [
    { label: "SEO", pos: "top-8 left-4 sm:left-10", delay: "0s" },
    { label: "Google Ads", pos: "top-20 right-2 sm:right-8", delay: "1.2s" },
    { label: "Meta Ads", pos: "bottom-24 left-2 sm:left-6", delay: "2.1s" },
    { label: "Web Design", pos: "bottom-12 right-6 sm:right-14", delay: "0.8s" },
    { label: "Digital Strategy", pos: "top-1/2 -left-3 sm:-left-6", delay: "1.6s" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-electric)]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          {/* Left Column: Personal Brand Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono tracking-wider text-emerald-600 dark:text-emerald-300 uppercase font-medium">
                AVAILABLE FOR PROJECTS
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--text-primary)] font-display leading-[1.08] mb-6">
              Turning Ideas Into{" "}
              <span className="gold-gradient-text block sm:inline">
                Digital Experiences
              </span>
              .
            </h1>

            {/* Supporting Text */}
            <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-[var(--color-gold)] tracking-wide mb-5">
              <span>Digital Marketing</span>
              <span className="text-[var(--text-secondary)]/40">·</span>
              <span>SEO</span>
              <span className="text-[var(--text-secondary)]/40">·</span>
              <span>Website Design</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
              {PORTFOLIO_HERO.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-gold)] text-[#080A0F] font-semibold text-sm tracking-wide hover:opacity-95 transition-all duration-200 shadow-lg shadow-[var(--color-gold)]/15 hover:shadow-[var(--color-gold)]/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold text-sm tracking-wide hover:border-[var(--color-gold)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <span>Let's Collaborate</span>
              </button>
            </div>

            {/* Social Icons & Direct Connect */}
            <div className="flex items-center gap-6 pt-4 border-t border-[var(--border-subtle)]">
              <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_HERO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 transition-all shadow-sm"
                  aria-label="Ronit's LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_HERO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--color-electric)] hover:border-[var(--color-electric)]/40 transition-all shadow-sm"
                  aria-label="Ronit's GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Centerpiece & Floating Labels */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              {/* 3D Canvas */}
              <Hero3DCanvas className="w-full h-full" />

              {/* Floating Skill Labels around 3D Centerpiece */}
              {floatingBadges.map((badge, idx) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.pos} pointer-events-none select-none z-20`}
                  style={{
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: badge.delay,
                  }}
                >
                  <div className="px-3.5 py-1.5 rounded-xl backdrop-blur-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-medium tracking-wide shadow-xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                    <span>{badge.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Animated Scroll Indicator */}
      <div className="w-full flex justify-center mt-6 lg:mt-0 pb-6 z-10">
        <button
          type="button"
          onClick={() => handleScrollTo("about")}
          className="group flex flex-col items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--color-gold)] transition-colors cursor-pointer"
          aria-label="Scroll to About Me section"
        >
          <span className="tracking-widest uppercase text-[10px] font-mono">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-[var(--border-subtle)] flex items-start justify-center p-1">
            <span className="w-1 h-2 bg-[var(--color-gold)] rounded-full animate-bounce" />
          </div>
        </button>
      </div>

      {/* Keyframe style for subtle float */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};
