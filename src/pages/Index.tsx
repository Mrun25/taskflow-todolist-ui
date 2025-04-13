
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { TaskCard, Task, TaskCategory } from "@/components/TaskCard";
import { AddTaskFab } from "@/components/AddTaskFab";
import { AddTaskModal } from "@/components/AddTaskModal";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/hooks/use-toast";

const initialTasks: Task[] = [
  {
    id: uuidv4(),
    title: "Complete project proposal",
    description: "Finish the draft and send it to the team for review",
    completed: false,
    timeSlot: "10:00 AM",
    category: "work",
  },
  {
    id: uuidv4(),
    title: "Grocery shopping",
    description: "Buy fruits, vegetables, and household items",
    completed: true,
    timeSlot: "12:30 PM",
    category: "errands",
  },
  {
    id: uuidv4(),
    title: "Read chapter 5",
    description: "Complete reading assignment for tomorrow's class",
    completed: false,
    timeSlot: "3:00 PM",
    category: "study",
  },
  {
    id: uuidv4(),
    title: "Call mom",
    description: "Weekly check-in call",
    completed: false,
    timeSlot: "6:00 PM",
    category: "personal",
  },
];

type CategoryFilter = "all" | TaskCategory;

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { toast } = useToast();

  const filteredTasks = tasks.filter(
    (task) => selectedCategory === "all" || task.category === selectedCategory
  );

  const handleToggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const updatedTask = { ...task, completed: !task.completed };
          if (updatedTask.completed) {
            toast({
              title: "Task completed!",
              description: `You've completed "${task.title}"`,
            });
          }
          return updatedTask;
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    const taskToDelete = tasks.find(task => task.id === id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
    
    toast({
      title: "Task deleted",
      description: taskToDelete ? `"${taskToDelete.title}" has been deleted` : "Task has been deleted",
    });
  };

  const handleAddTask = (newTask: Omit<Task, "id" | "completed">) => {
    const task: Task = {
      id: uuidv4(),
      completed: false,
      ...newTask,
    };
    setTasks((prev) => [task, ...prev]);
    toast({
      title: "Task created",
      description: "Your new task has been created successfully.",
    });
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Tasks</h1>
            <p className="text-muted-foreground">
              Manage and organize your daily tasks
            </p>
          </div>

          <div className="mb-6">
            <CategoryFilter
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          <div>
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No tasks found</h3>
                <p className="text-muted-foreground mb-4">
                  {selectedCategory === "all"
                    ? "You don't have any tasks yet. Create your first task!"
                    : `You don't have any ${selectedCategory} tasks. Create one or select a different category.`}
                </p>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
                >
                  Create a Task
                </button>
              </div>
            ) : (
              <div>
                {filteredTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDeleteTask}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <AddTaskFab onClick={() => setIsAddModalOpen(true)} />
        <AddTaskModal
          open={isAddModalOpen}
          onOpenChange={setIsAddModalOpen}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
};

export default Index;
