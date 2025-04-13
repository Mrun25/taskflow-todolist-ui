
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Category = "all" | "work" | "personal" | "study" | "errands";

interface CategoryFilterProps {
  selected: Category;
  onChange: (category: Category) => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All" },
    { value: "work", label: "Work" },
    { value: "personal", label: "Personal" },
    { value: "study", label: "Study" },
    { value: "errands", label: "Errands" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <motion.button
          key={category.value}
          onClick={() => onChange(category.value)}
          className={cn(
            "tab-button relative",
            selected === category.value && "active",
            "dark:hover:bg-slate-800 hover:bg-slate-100 font-medium"
          )}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {category.label}
          {selected === category.value && (
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" 
              layoutId="categoryIndicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
