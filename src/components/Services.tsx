import React from "react";
import {
  Layout,
  Search,
  Target,
  Share2,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES_DATA, Service } from "../data/portfolioData";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleDiscuss = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderServiceIcon = (icon: string) => {
    switch (icon) {
      case "Layout":
        return <Layout className="w-6 h-6 text-[var(--color-gold)]" />;
      case "Search":
        return <Search className="w-6 h-6 text-[var(--color-electric)]" />;
      case "Target":
        return <Target className="w-6 h-6 text-[var(--color-gold)]" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-[var(--color-electric)]" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-[var(--color-gold)]" />;
      default:
        return <Layout className="w-6 h-6 text-[var(--color-gold)]" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
            04 / SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight mb-4">
            Digital Solutions for Growing Businesses.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Practical digital marketing, search visibility, and web development
            solutions crafted to help brands communicate their value and attract
            customers.
          </p>
        </div>

        {/* Services Grid (5 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--color-gold)]/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--color-gold)]/10 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Top ambient hover accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-gold)]/10 via-transparent to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] group-hover:border-[var(--color-gold)]/30 transition-colors shadow-sm">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-black/15 dark:text-white/15 group-hover:text-[var(--color-gold)]/40 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.summary}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)] mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-gold)] block mb-2 font-medium">
                    Scope & Focus
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => handleDiscuss(service.title)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 hover:bg-[var(--color-gold)] text-[var(--text-primary)] hover:text-[#080A0F] hover:border-[var(--color-gold)] transition-all duration-200 text-xs font-semibold uppercase tracking-wider group/btn cursor-pointer shadow-sm"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
