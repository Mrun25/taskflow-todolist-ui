
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function SpaceshipToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "spaceship-toggle-track relative",
        isDark 
          ? "bg-slate-800 bg-opacity-50 border border-indigo-500/30" 
          : "bg-sky-100"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Stars in dark mode */}
      {isDark && (
        <>
          <motion.span 
            className="absolute top-1 left-2 h-1 w-1 bg-white rounded-full opacity-70"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <motion.span 
            className="absolute top-3 left-5 h-0.5 w-0.5 bg-white rounded-full opacity-80"
            animate={{ 
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.3, 1] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5 
            }}
          />
          <motion.span 
            className="absolute bottom-2 left-3 h-0.5 w-0.5 bg-white rounded-full opacity-60"
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1 
            }}
          />
          <motion.span 
            className="absolute top-5 right-4 h-1 w-1 bg-white rounded-full opacity-70"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.3, 1] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1.5 
            }}
          />
          <motion.span 
            className="absolute bottom-3 right-3 h-0.5 w-0.5 bg-white rounded-full opacity-80"
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.7 
            }}
          />
        </>
      )}

      {/* Clouds in light mode */}
      {!isDark && (
        <>
          <motion.span 
            className="absolute top-2 left-3 h-1.5 w-3 bg-white rounded-full opacity-90"
            animate={{ 
              x: [0, 3, 0] 
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <motion.span 
            className="absolute bottom-2 left-4 h-1 w-2 bg-white rounded-full opacity-80"
            animate={{ 
              x: [0, 2, 0] 
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          />
          <motion.span 
            className="absolute top-3 right-3 h-1 w-3 bg-white rounded-full opacity-90"
            animate={{ 
              x: [0, -2, 0] 
            }}
            transition={{ 
              duration: 5.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </>
      )}

      {/* Spaceship thumb */}
      <motion.div
        className={cn(
          "spaceship-toggle-thumb",
          isDark 
            ? "bg-indigo-500 shadow-[0_0_15px_rgba(139,92,246,0.6)]" 
            : "bg-sky-400"
        )}
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        animate={{
          x: isDark ? "10px" : "0px"
        }}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-white" />
        ) : (
          <Sun className="h-4 w-4 text-white" />
        )}
      </motion.div>
    </button>
  );
}
