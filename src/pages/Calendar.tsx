
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { eachDayOfInterval, startOfMonth, endOfMonth, format, isToday, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

const Calendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  
  // Sample tasks data
  const tasks = [
    { 
      id: '1', 
      title: 'Team meeting',
      date: new Date(2025, 3, 15, 10, 0),
      category: 'work',
    },
    { 
      id: '2', 
      title: 'Doctor appointment',
      date: new Date(2025, 3, 16, 14, 30),
      category: 'personal',
    },
    { 
      id: '3', 
      title: 'Project submission',
      date: new Date(2025, 3, 20, 17, 0),
      category: 'work',
    },
    { 
      id: '4',
      title: 'Grocery shopping',
      date: new Date(),
      category: 'errands',
    },
  ];
  
  const currentDate = new Date();
  
  // Get all tasks for the selected date
  const selectedDateTasks = tasks.filter(task => 
    isSameDay(task.date, date)
  );
  
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Calendar</h1>
            <p className="text-muted-foreground">
              View and manage your scheduled tasks
            </p>
          </div>
          
          <div className="grid md:grid-cols-[350px_1fr] gap-8">
            <Card className="p-4">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                className="border-none"
                modifiers={{
                  hasTasks: (date) => tasks.some(task => isSameDay(task.date, date)),
                }}
                modifiersClassNames={{
                  today: "bg-primary text-primary-foreground",
                  hasTasks: "border-2 border-primary/50",
                }}
              />
            </Card>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {isToday(date) ? "Today's Schedule" : format(date, "MMMM d, yyyy")}
              </h2>
              
              {selectedDateTasks.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateTasks.map(task => (
                    <Card key={task.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{task.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{format(task.date, "h:mm a")}</span>
                          </div>
                        </div>
                        <span className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          task.category === 'work' && "bg-category-work text-white",
                          task.category === 'personal' && "bg-category-personal text-white",
                          task.category === 'study' && "bg-category-study text-slate-900",
                          task.category === 'errands' && "bg-category-errands text-white",
                        )}>
                          {task.category}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">No tasks scheduled for this day</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
