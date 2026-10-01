import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border-subtle)] py-3.5 shadow-lg shadow-black/5 dark:shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center text-xl sm:text-2xl font-bold tracking-tight font-display text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors"
        >
          <span>RONIT</span>
          <span className="text-[var(--color-gold)] group-hover:scale-125 transition-transform duration-300">
            .
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-[var(--color-gold)] font-medium"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--color-gold)] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions + Theme Switcher */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Switcher Icon Button */}
          <ThemeSwitcher />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group relative hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold tracking-wider uppercase rounded-xl border border-[var(--color-gold)]/40 bg-[var(--bg-card)] text-[var(--text-primary)] hover:text-[#080A0F] hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-200 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-2xl border-b border-[var(--border-subtle)] px-6 py-6 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base tracking-wide transition-colors py-1 ${
                    isActive
                      ? "text-[var(--color-gold)] font-medium pl-2 border-l-2 border-[var(--color-gold)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[var(--text-secondary)]">
                Color Theme
              </span>
              <ThemeSwitcher showLabel />
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl bg-[var(--color-gold)] text-[#080A0F] hover:opacity-95 transition-opacity"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
