
import { Plus } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface AddTaskFabProps {
  onClick: () => void;
}

export function AddTaskFab({ onClick }: AddTaskFabProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={onClick}
      className={cn(
        "fab",
        isDark && "dark"
      )}
      aria-label="Add new task"
    >
      <Plus className="h-6 w-6" />
    </button>
  );
}
