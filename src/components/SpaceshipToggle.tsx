
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export function SpaceshipToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "spaceship-toggle-track",
        isDark 
          ? "bg-slate-800 bg-opacity-50 border border-indigo-500/30" 
          : "bg-sky-100"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Stars in dark mode */}
      {isDark && (
        <>
          <span className="absolute top-1 left-2 h-1 w-1 bg-white rounded-full opacity-70"></span>
          <span className="absolute top-3 left-5 h-0.5 w-0.5 bg-white rounded-full opacity-80"></span>
          <span className="absolute bottom-2 left-3 h-0.5 w-0.5 bg-white rounded-full opacity-60"></span>
          <span className="absolute top-5 right-4 h-1 w-1 bg-white rounded-full opacity-70"></span>
          <span className="absolute bottom-3 right-3 h-0.5 w-0.5 bg-white rounded-full opacity-80"></span>
        </>
      )}

      {/* Clouds in light mode */}
      {!isDark && (
        <>
          <span className="absolute top-2 left-3 h-1.5 w-3 bg-white rounded-full opacity-90"></span>
          <span className="absolute bottom-2 left-4 h-1 w-2 bg-white rounded-full opacity-80"></span>
          <span className="absolute top-3 right-3 h-1 w-3 bg-white rounded-full opacity-90"></span>
        </>
      )}

      {/* Spaceship thumb */}
      <div
        className={cn(
          "spaceship-toggle-thumb",
          isDark 
            ? "translate-x-10 bg-indigo-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
            : "translate-x-0 bg-sky-400"
        )}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-white" />
        ) : (
          <Sun className="h-4 w-4 text-white" />
        )}
      </div>
    </button>
  );
}
