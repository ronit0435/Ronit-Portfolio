import React, { useState } from "react";
import {
  TrendingUp,
  Search,
  Target,
  Layout,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    description: string;
    categoryTitle: string;
  } | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[var(--color-gold)]" />;
      case "Search":
        return <Search className="w-5 h-5 text-[var(--color-electric)]" />;
      case "Target":
        return <Target className="w-5 h-5 text-[var(--color-gold)]" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-[var(--color-electric)]" />;
      default:
        return <Layers className="w-5 h-5 text-[var(--color-gold)]" />;
    }
  };

  const filteredCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
              02 / EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight">
              Skills That Bring Ideas to Life.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Permitted Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-subtle)] backdrop-blur-md shadow-sm">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-[var(--color-gold)] text-[#080A0F] font-semibold shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[var(--color-gold)] text-[#080A0F] font-semibold shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Display */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              {/* Category Subhead */}
              <div className="flex items-center gap-3 pb-2 border-b border-[var(--border-subtle)]">
                <div className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid for this Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() =>
                      setSelectedSkill({
                        name: skill.name,
                        description: skill.description,
                        categoryTitle: category.title,
                      })
                    }
                    className="group relative p-5 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--color-gold)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-gold)]/5 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-gold)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] font-display group-hover:text-[var(--color-gold)] transition-colors">
                          {skill.name}
                        </h4>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                      <span>VERIFIED SKILL</span>
                      <span className="text-[var(--color-gold)] group-hover:underline">
                        Details →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Popover Modal for Selected Skill */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl glass-panel p-6 border border-[var(--color-gold)]/30 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-gold)]">
                {selectedSkill.categoryTitle}
              </span>
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1 rounded-md"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mb-3">
              {selectedSkill.name}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {selectedSkill.description}
            </p>

            <div className="p-3 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)] font-semibold block mb-1">
                Implementation Focus
              </span>
              Applied across live web and digital marketing initiatives with
              practical attention to SEO structure, advertising intent, and
              conversion pathways.
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--color-gold)] text-[#080A0F] hover:opacity-90"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
