
import { Plus } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AddTaskFabProps {
  onClick: () => void;
}

export function AddTaskFab({ onClick }: AddTaskFabProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "fab",
        isDark && "dark",
        "group"
      )}
      aria-label="Add new task"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15 
      }}
    >
      <Plus className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
      <span className="absolute -top-10 right-0 bg-background border px-3 py-1.5 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
        Add task
      </span>
    </motion.button>
  );
}
