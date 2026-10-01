import React, { useState, useEffect } from "react";
import { Briefcase, Calendar, Edit3, Check, RotateCcw, Sparkles } from "lucide-react";
import { INITIAL_JOURNEY_ITEMS, JourneyItem } from "../data/portfolioData";

export const Journey: React.FC = () => {
  const [items, setItems] = useState<JourneyItem[]>(() => {
    const saved = localStorage.getItem("ronit_journey_items");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_JOURNEY_ITEMS;
      }
    }
    return INITIAL_JOURNEY_ITEMS;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<JourneyItem | null>(null);

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const updated = items.map((it) => (it.id === editingItem.id ? editingItem : it));
    setItems(updated);
    localStorage.setItem("ronit_journey_items", JSON.stringify(updated));
    setEditingItem(null);
  };

  const handleReset = () => {
    setItems(INITIAL_JOURNEY_ITEMS);
    localStorage.removeItem("ronit_journey_items");
    setEditingItem(null);
  };

  return (
    <section id="journey" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
              06 / JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight mb-4">
              Learning, Building, and Growing.
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              A continuous path of skill acquisition, practical project execution,
              and exploration across digital marketing and modern web design.
            </p>
          </div>

          {/* Quick Edit Toggle for Ronit */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--color-gold)] text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-all cursor-pointer shadow-sm"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? "Exit Edit Mode" : "Customize Milestones"}</span>
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={handleReset}
                className="p-2 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-red-500 text-xs"
                title="Reset to defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[var(--border-subtle)] ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          {items.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-gold)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-gold)] font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>

                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => setEditingItem(item)}
                      className="text-xs text-[var(--color-gold)] hover:underline flex items-center gap-1"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit Details</span>
                    </button>
                  )}
                </div>

                <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mb-1">
                  {item.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-medium text-[var(--color-electric)] mb-4">
                  {item.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Skills Used */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] mr-1">
                    Areas:
                  </span>
                  {item.skillsUsed.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/[0.03] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Milestone Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl glass-panel border border-[var(--color-gold)]/40 p-6 shadow-2xl animate-in fade-in duration-200">
            <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-4">
              Edit Journey Milestone
            </h3>

            <form onSubmit={handleSaveItem} className="space-y-4 text-xs">
              <div>
                <label className="block text-[var(--text-secondary)] mb-1">Date / Period</label>
                <input
                  type="text"
                  value={editingItem.period}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, period: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--color-gold)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] mb-1">Title / Milestone</label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, title: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--color-gold)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] mb-1">
                  Organization / Subtitle
                </label>
                <input
                  type="text"
                  value={editingItem.subtitle}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, subtitle: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--color-gold)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] mb-1">Description</label>
                <textarea
                  rows={4}
                  value={editingItem.description}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, description: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--color-gold)] focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[var(--color-gold)] text-[#080A0F] font-semibold hover:opacity-90"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
