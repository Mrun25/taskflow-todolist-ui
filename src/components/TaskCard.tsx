
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { useState } from "react";

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
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggleComplete, onDelete }: TaskCardProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleToggle = () => {
    if (!task.completed) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }
    onToggleComplete(task.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(task.id);
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
    <div 
      className={cn(
        "task-card relative group",
        task.completed && "opacity-75"
      )}
      draggable="true"
    >
      {showConfetti && (
        <>
          <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-yellow-400 animate-confetti"></span>
          <span className="absolute -top-1 right-3 w-2 h-2 rounded-full bg-green-400 animate-confetti"></span>
          <span className="absolute -top-2 right-6 w-2 h-2 rounded-full bg-purple-400 animate-confetti"></span>
        </>
      )}
      
      <div className="flex items-start gap-3">
        <button 
          onClick={handleToggle} 
          className="mt-0.5 flex-shrink-0 transition-transform hover:scale-110"
        >
          {task.completed ? (
            <CheckCircle2 className="h-5 w-5 text-primary" />
          ) : (
            <Circle className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className={cn(
              "font-medium",
              task.completed && "line-through text-muted-foreground"
            )}>
              {task.title}
            </h3>
            
            <button
              onClick={handleDelete}
              className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive p-1 rounded-full hover:bg-background"
              aria-label="Delete task"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          
          {task.description && (
            <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
          )}
          
          <div className="flex items-center justify-between mt-2">
            <span className={cn(
              "category-pill",
              getCategoryColor(task.category)
            )}>
              {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
            </span>
            
            {task.timeSlot && (
              <span className="text-xs text-muted-foreground">
                {task.timeSlot}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
