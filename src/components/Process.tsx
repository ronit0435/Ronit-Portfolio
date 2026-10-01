import React, { useState } from "react";
import { PROCESS_STEPS, ProcessStep } from "../data/portfolioData";

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 lg:py-32 relative bg-black/[0.02] dark:bg-[#090C12]/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
            05 / PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight mb-4">
            From First Conversation to Final Delivery.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            A structured, transparent workflow designed to keep every project
            aligned, organized, and focused on clear results.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Hidden on small screens) */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting Track Line */}
          <div className="absolute top-6 left-8 right-8 h-[2px] bg-[var(--border-subtle)] z-0">
            <div
              className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-electric)] transition-all duration-500"
              style={{
                width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isPassed = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  {/* Step Node */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isCurrent
                        ? "bg-[var(--color-gold)] text-[#080A0F] shadow-lg shadow-[var(--color-gold)]/30 scale-110 ring-4 ring-[var(--color-gold)]/20"
                        : isPassed
                        ? "bg-[var(--bg-card)] text-[var(--color-gold)] border-2 border-[var(--color-gold)]"
                        : "bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)] group-hover:border-[var(--color-gold)]/50"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`mt-4 text-sm font-bold font-display transition-colors ${
                      isCurrent
                        ? "text-[var(--color-gold)]"
                        : "text-[var(--text-primary)] group-hover:text-[var(--color-gold)]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Summary preview */}
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2 px-1">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Step Expansion Card (Desktop) */}
          <div className="mt-12 p-8 rounded-2xl glass-panel border border-[var(--color-gold)]/30 shadow-xl flex items-center justify-between gap-8 animate-in fade-in duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[var(--color-gold)] uppercase tracking-wider font-semibold">
                PHASE {PROCESS_STEPS[activeStep].number} IN DETAIL
              </span>
              <h4 className="text-2xl font-bold font-display text-[var(--text-primary)]">
                {PROCESS_STEPS[activeStep].title}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                {PROCESS_STEPS[activeStep].details}
              </p>
            </div>

            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/[0.04] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]">
                STRUCTURED WORKFLOW
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative border-l-2 border-[var(--border-subtle)] pl-6 ml-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className="relative group">
              {/* Vertical Node Indicator */}
              <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-gold)] flex items-center justify-center font-mono text-[10px] text-[var(--color-gold)] font-bold">
                {idx + 1}
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-[var(--border-subtle)]">
                <span className="text-xs font-mono text-[var(--color-gold)] block mb-1">
                  Step {step.number}
                </span>
                <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-[var(--text-muted)] italic pt-2 border-t border-[var(--border-subtle)]">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
