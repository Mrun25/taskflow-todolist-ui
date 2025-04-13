
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type TaskCategory = "work" | "personal" | "study" | "errands";

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  timeSlot?: string;
  category: TaskCategory;
  dueDate?: Date;
}

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
}

export function TaskCard({ task, onToggleComplete }: TaskCardProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleToggle = () => {
    if (!task.completed) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }
    onToggleComplete(task.id);
  };

  const getCategoryColor = (category: TaskCategory) => {
    switch (category) {
      case "work":
        return "bg-category-work text-white";
      case "personal":
        return "bg-category-personal text-white";
      case "study":
        return "bg-category-study text-slate-900";
      case "errands":
        return "bg-category-errands text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <motion.div 
      className={cn(
        "task-card",
        task.completed && "opacity-75"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        y: -4, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      layout
      draggable="true"
    >
      <AnimatePresence>
        {showConfetti && (
          <>
            <motion.span 
              className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-yellow-400"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -20, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.span 
              className="absolute -top-1 right-3 w-2 h-2 rounded-full bg-green-400"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -15, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            />
            <motion.span 
              className="absolute -top-2 right-6 w-2 h-2 rounded-full bg-purple-400"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -20, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            />
          </>
        )}
      </AnimatePresence>
      
      <div className="flex items-start gap-3">
        <motion.button 
          onClick={handleToggle} 
          className="mt-0.5 flex-shrink-0 transition-transform hover:scale-110"
          whileTap={{ scale: 0.9 }}
        >
          {task.completed ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </motion.div>
          ) : (
            <Circle className="h-5 w-5 text-muted-foreground" />
          )}
        </motion.button>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className={cn(
              "font-medium",
              task.completed && "line-through text-muted-foreground"
            )}>
              {task.title}
            </h3>
          </div>
          
          {task.description && (
            <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
          )}
          
          <div className="flex items-center justify-between mt-2">
            <motion.span 
              className={cn(
                "category-pill",
                getCategoryColor(task.category)
              )}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
            </motion.span>
            
            {task.timeSlot && (
              <span className="text-xs text-muted-foreground">
                {task.timeSlot}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
