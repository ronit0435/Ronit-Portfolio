import React, { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Trash2, RefreshCw } from "lucide-react";
import { ABOUT_DATA } from "../data/portfolioData";

export const About: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(() => {
    return localStorage.getItem("ronit_profile_image") || null;
  });
  const [urlInput, setUrlInput] = useState("");
  const [showUrlField, setShowUrlField] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setProfileImage(result);
        localStorage.setItem("ronit_profile_image", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      setProfileImage(urlInput.trim());
      localStorage.setItem("ronit_profile_image", urlInput.trim());
      setUrlInput("");
      setShowUrlField(false);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    localStorage.removeItem("ronit_profile_image");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-mono font-medium block mb-2">
            01 / ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--text-primary)] tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Clean & Simple Profile Image Area */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="simple-profile-upload"
              />

              {profileImage ? (
                /* Simple Profile Image - Nothing Above It */
                <div className="space-y-4">
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-xl bg-[var(--bg-card)]">
                    <img
                      src={profileImage}
                      alt="Ronit"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Clean controls below the image */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--color-gold)] text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors cursor-pointer shadow-sm"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Change Photo</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Simple Upload Dropzone - Clean and Direct */
                <div className="space-y-4">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full aspect-[4/5] rounded-2xl border-2 border-dashed border-[var(--border-subtle)] hover:border-[var(--color-gold)] bg-[var(--bg-card)]/60 hover:bg-[var(--bg-card)] flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all duration-300 group shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>

                    <h3 className="text-base font-bold font-display text-[var(--text-primary)] mb-1">
                      Add Profile Photo
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] max-w-[200px] mb-4">
                      Click to upload an image from your device
                    </p>

                    <span className="px-4 py-2 rounded-xl bg-[var(--color-gold)] text-[#080A0F] font-semibold text-xs tracking-wide">
                      Select Photo
                    </span>
                  </div>

                  {/* Optional URL input toggle */}
                  <div className="text-center">
                    {!showUrlField ? (
                      <button
                        type="button"
                        onClick={() => setShowUrlField(true)}
                        className="text-xs text-[var(--text-secondary)] hover:text-[var(--color-gold)] transition-colors underline"
                      >
                        Or paste image web link
                      </button>
                    ) : (
                      <form onSubmit={handleUrlSubmit} className="flex gap-2">
                        <input
                          type="url"
                          placeholder="Paste image link URL..."
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                          className="flex-1 px-3 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--color-gold)]"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl bg-[var(--color-gold)] text-[#080A0F] text-xs font-semibold hover:opacity-90"
                        >
                          Add
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Narrative & 3 Interactive Pillar Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              <p className="text-[var(--text-primary)] font-medium text-lg sm:text-xl">
                {ABOUT_DATA.bio[0]}
              </p>
              <p>{ABOUT_DATA.bio[1]}</p>
            </div>

            {/* Core Practice Highlights */}
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

            {/* Quick Unboxed Stats / Credibility Line */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[var(--text-secondary)]">
              <div>
                <span className="text-sm font-semibold text-[var(--text-primary)] block">
                  SEO & Search Strategy
                </span>
                <span className="text-[var(--text-secondary)]">On-Page, Off-Page & Local</span>
              </div>
              <span className="hidden sm:inline opacity-30">|</span>
              <div>
                <span className="text-sm font-semibold text-[var(--text-primary)] block">
                  Paid Advertising
                </span>
                <span className="text-[var(--text-secondary)]">Google Ads & Meta Campaigns</span>
              </div>
              <span className="hidden sm:inline opacity-30">|</span>
              <div>
                <span className="text-sm font-semibold text-[var(--text-primary)] block">
                  Website Craft
                </span>
                <span className="text-[var(--text-secondary)]">Responsive & Modern Web</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
