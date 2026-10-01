import React, { useState } from "react";
import {
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  Copy,
  Check,
  Edit2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Calendar,
  Clock,
  ShieldCheck,
  SendHorizontal,
} from "lucide-react";
import { SERVICES_DATA } from "../data/portfolioData";

interface ContactProps {
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  // Contact details with editable placeholders as requested
  const [emailAddress, setEmailAddress] = useState<string>(() => {
    return localStorage.getItem("ronit_contact_email") || "contact.ronit@example.com";
  });
  const [whatsAppNumber, setWhatsAppNumber] = useState<string>(() => {
    return localStorage.getItem("ronit_contact_whatsapp") || "+91 8872282955";
  });

  const [isEditingContactInfo, setIsEditingContactInfo] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(whatsAppNumber);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2200);
  };

  const handleSaveContactInfo = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("ronit_contact_email", emailAddress);
    localStorage.setItem("ronit_contact_whatsapp", whatsAppNumber);
    setIsEditingContactInfo(false);
  };

  const cleanWhatsAppUrl = (customTopic?: string) => {
    const cleanNum = whatsAppNumber.replace(/\D/g, "");
    const topic = customTopic || selectedServicePreset || "digital services and web design";
    const text = encodeURIComponent(
      `Hi Ronit! I came across your portfolio and would like to discuss a project regarding ${topic}.`
    );
    return `https://wa.me/${cleanNum}?text=${text}`;
  };

  const buildMailtoUrl = (serviceTitle?: string) => {
    const topic = serviceTitle || selectedServicePreset || "Website Design & Digital Marketing";
    const subject = encodeURIComponent(`Project Inquiry: ${topic} - Collaboration with Ronit`);
    const body = encodeURIComponent(
      `Hi Ronit,\n\nI came across your portfolio and I am interested in discussing a project regarding: ${topic}.\n\nHere is a brief summary of what we are looking to achieve:\n- Scope & Goals: \n- Target Timeline: \n\nYou can reach me back at this email.\n\nBest regards,\n`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
              07 / LET'S CONNECT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Let's discuss how a modern website or a thoughtful digital marketing
              strategy could support your business. Reach out directly through your
              preferred channel.
            </p>
          </div>

          {/* Quick Settings for Ronit to edit contact placeholder */}
          <button
            type="button"
            onClick={() => setIsEditingContactInfo(!isEditingContactInfo)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--color-gold)] text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-all cursor-pointer w-fit"
            title="Configure placeholder contact details"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>{isEditingContactInfo ? "Close Settings" : "Configure Contact Placeholders"}</span>
          </button>
        </div>

        {/* Edit Placeholder Modal / Drawer */}
        {isEditingContactInfo && (
          <div className="mb-12 p-6 rounded-2xl glass-panel border border-[var(--color-gold)]/40 shadow-xl max-w-xl animate-in fade-in duration-200">
            <h3 className="text-sm font-bold font-display text-[var(--text-primary)] mb-3">
              Configure Contact Information
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed">
              Update the placeholder email address and WhatsApp number to your actual details.
              Changes are saved locally to your browser.
            </p>

            <form onSubmit={handleSaveContactInfo} className="space-y-4 text-xs">
              <div>
                <label className="block text-[var(--text-secondary)] mb-1 font-mono">
                  Your Email Address
                </label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--color-gold)] focus:outline-none"
                  placeholder="e.g. ronit@example.com"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] mb-1 font-mono">
                  Your WhatsApp Number (including country code)
                </label>
                <input
                  type="text"
                  value={whatsAppNumber}
                  onChange={(e) => setWhatsAppNumber(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--color-gold)] focus:outline-none"
                  placeholder="e.g. +91 8872282955"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[var(--color-gold)] text-[#080A0F] font-semibold text-xs hover:opacity-90"
                >
                  Save Details
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingContactInfo(false)}
                  className="px-4 py-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Direct Email */}
          <div className="p-7 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--color-gold)]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Direct Email
              </span>
              <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-2">
                Email Inquiry
              </h3>
              <p className="text-xs text-[var(--text-secondary)] break-all mb-4">
                {emailAddress}
              </p>
            </div>

            <a
              href={buildMailtoUrl()}
              className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-[var(--color-gold)] text-[#080A0F] font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
            >
              <span>Compose Email</span>
              <SendHorizontal className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Instant WhatsApp */}
          <div className="p-7 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyWhatsApp}
                  className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  title="Copy WhatsApp number"
                  aria-label="Copy WhatsApp number"
                >
                  {copiedWhatsApp ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Instant Chat
              </span>
              <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-2">
                WhatsApp Direct
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-4">
                {whatsAppNumber}
              </p>
            </div>

            <a
              href={cleanWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-emerald-500 text-[#080A0F] font-semibold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: LinkedIn Profile */}
          <div className="p-7 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--color-electric)]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-[var(--color-electric)]/10 text-[var(--color-electric)] border border-[var(--color-electric)]/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[var(--text-muted)]">
                  Professional
                </span>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                LinkedIn Network
              </span>
              <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-2">
                Ronit on LinkedIn
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-4">
                Connect for professional networking, recommendations, and inquiries.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/ronit20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--color-electric)] text-[var(--text-primary)] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-electric)]" />
            </a>
          </div>

          {/* Card 4: GitHub Repository */}
          <div className="p-7 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--text-primary)]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/10 text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[var(--text-muted)]">
                  Code & Demos
                </span>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Source Code
              </span>
              <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-2">
                GitHub Repositories
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-4">
                Explore project source repositories, frontend code, and live GitHub Pages.
              </p>
            </div>

            <a
              href="https://github.com/ronit0435"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] text-[var(--text-primary)] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Ready-to-Discuss Consultation Topics */}
        <div className="rounded-2xl glass-panel border border-[var(--border-subtle)] p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-1">
              CONSULTATION TOPICS
            </span>
            <h3 className="text-2xl font-bold font-display text-[var(--text-primary)] mb-2">
              Ready to Discuss a Specific Requirement?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Click any focus area below to launch your email client with a customized inquiry draft ready to send.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_DATA.map((service) => (
              <a
                key={service.id}
                href={buildMailtoUrl(service.title)}
                className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/60 hover:border-[var(--color-gold)]/40 hover:bg-[var(--bg-card)] transition-all duration-200 group flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-[var(--color-gold)]">
                      {service.number}
                    </span>
                    <h4 className="text-sm font-bold font-display text-[var(--text-primary)] group-hover:text-[var(--color-gold)] transition-colors">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {service.summary}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
              </a>
            ))}

            {/* General Digital Strategy Card */}
            <a
              href={buildMailtoUrl("Comprehensive Digital Marketing Strategy")}
              className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/60 hover:border-[var(--color-gold)]/40 hover:bg-[var(--bg-card)] transition-all duration-200 group flex items-start justify-between gap-3 cursor-pointer sm:col-span-2 lg:col-span-1"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono text-[var(--color-gold)]">
                    06
                  </span>
                  <h4 className="text-sm font-bold font-display text-[var(--text-primary)] group-hover:text-[var(--color-gold)] transition-colors">
                    Custom Digital Strategy
                  </h4>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  Combined web design, SEO optimization, and targeted advertising audits.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
            </a>
          </div>

          {/* Response Promise Footer */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>TYPICAL RESPONSE TIME: WITHIN 24 HOURS</span>
            </div>
            <span>AVAILABLE FOR REMOTE & GLOBAL CLIENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
