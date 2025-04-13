
import { cn } from "@/lib/utils";

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
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onChange(category.value)}
          className={cn(
            "tab-button",
            selected === category.value && "active",
            "dark:hover:bg-slate-800 hover:bg-slate-100"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
