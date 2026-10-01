/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>("");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "projects",
      "services",
      "process",
      "journey",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--color-gold)]/20 selection:text-[var(--color-gold)] relative overflow-x-hidden transition-colors duration-300">
      {/* Subtle Noise / Ambient Light Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[var(--color-gold)]/[0.04] via-transparent to-transparent blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-electric)]/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-gold)]/[0.03] rounded-full blur-[140px]" />
      </div>

      {/* Main Content Layers */}
      <div className="relative z-10">
        {/* Floating Top Bar Contract Header with Theme Switcher */}
        <Navbar activeSection={activeSection} />

        {/* Hero Section with 3D Centerpiece */}
        <main>
          <Hero />

          {/* 01 / About Me */}
          <About />

          {/* 02 / Expertise / Skills */}
          <Skills />

          {/* 03 / Selected Work / Projects */}
          <Projects />

          {/* 04 / Services */}
          <Services onSelectService={handleSelectService} />

          {/* 05 / Process */}
          <Process />

          {/* 06 / Journey */}
          <Journey />

          {/* 07 / Let's Connect / Direct Contact Hub (Form Removed) */}
          <Contact selectedServicePreset={selectedServicePreset} />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
