import React from "react";
import { ABOUT_DATA } from "../data/portfolioData";
import profilePhoto from "../assets/images/Profile.jpeg";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
            01 / ABOUT ME
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* FIXED PROFILE PHOTO */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-xl bg-[var(--bg-card)]">
                <img
                  src={profilePhoto}
                  alt="Ronit - Digital Marketing Professional"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* ABOUT CONTENT */}
          <div className="lg:col-span-7 space-y-8">

            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">

              <p className="text-[var(--text-primary)] font-medium text-lg sm:text-xl">
                {ABOUT_DATA.bio[0]}
              </p>

              <p>
                {ABOUT_DATA.bio[1]}
              </p>

            </div>

            {/* CORE SPECIALIZATIONS */}
            <div className="pt-4 border-t border-[var(--border-subtle)]">

              <h3 className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono mb-4">
                Core Specializations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {ABOUT_DATA.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--color-gold)]/40 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-1.5 h-6 bg-[var(--color-gold)] rounded-full mb-3 group-hover:scale-y-110 transition-transform" />

                    <h4 className="text-base font-semibold text-[var(--text-primary)] font-display mb-1">
                      {pillar.title}
                    </h4>

                    <span className="text-xs text-[var(--color-gold)] font-medium block mb-2">
                      {pillar.subtitle}
                    </span>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* SKILLS */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[var(--text-secondary)]">

              <div>
                <span className="text-sm font-semibold text-[var(--text-primary)] block">
                  SEO & Search Strategy
                </span>
                <span className="text-[var(--text-secondary)]">
                  On-Page, Off-Page & Local
                </span>
              </div>

              <span className="hidden sm:inline opacity-30">|</span>

              <div>
                <span className="text-sm font-semibold text-[var(--text-primary)] block">
                  Paid Advertising
                </span>
                <span className="text-[var(--text-secondary)]">
                  Google Ads & Meta Campaigns
                </span>
              </div>

              <span className="hidden sm:inline opacity-30">|</span>

              <div>
                <span className="text-sm font-semibold text-[var(--text-primary)] block">
                  Website Craft
                </span>
                <span className="text-[var(--text-secondary)]">
                  Responsive & Modern Web
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};