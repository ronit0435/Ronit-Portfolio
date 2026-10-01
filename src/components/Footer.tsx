import React from "react";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { PORTFOLIO_HERO } from "../data/portfolioData";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] py-14 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand & Slogan */}
          <div className="space-y-2">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="inline-block text-2xl font-bold tracking-tight font-display text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors"
            >
              RONIT<span className="text-[var(--color-gold)]">.</span>
            </a>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Building meaningful digital experiences.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme switcher, Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />

            <a
              href={PORTFOLIO_HERO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_HERO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--color-electric)] hover:border-[var(--color-electric)]/40 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 transition-colors cursor-pointer group shadow-sm"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
          <p>© {currentYear} Ronit. All rights reserved.</p>
          <p>Digital Marketing · SEO Specialist · Website Designer</p>
        </div>
      </div>
    </footer>
  );
};
