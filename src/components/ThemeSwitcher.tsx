import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = "",
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 border cursor-pointer select-none ${
        isDark
          ? "bg-[#11141C]/80 border-white/10 hover:border-[#D6B779]/50 hover:bg-[#161B26] text-[#D6B779]"
          : "bg-white/80 border-black/10 hover:border-[#B58E45]/50 hover:bg-white text-[#B58E45] shadow-sm"
      } ${className}`}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      <div className="relative w-4.5 h-4.5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4.5 h-4.5 transition-transform duration-500 rotate-0 group-hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="w-4.5 h-4.5 transition-transform duration-500 rotate-0 group-hover:-rotate-12 group-hover:scale-110" />
        )}
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-medium tracking-wide">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
};
