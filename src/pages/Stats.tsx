
import { Sidebar } from "@/components/Sidebar";
import { ProgressDonut } from "@/components/stats/ProgressDonut";
import { TaskBarChart } from "@/components/stats/TaskBarChart";
import { CategoryPieChart } from "@/components/stats/CategoryPieChart";
import { StatsCard } from "@/components/stats/StatsCard";
import { Flame, Repeat, Target, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const Stats = () => {
  // Sample data for the weekly tasks
  const weeklyTasksData = [
    { day: "Mon", completed: 5 },
    { day: "Tue", completed: 8 },
    { day: "Wed", completed: 3 },
    { day: "Thu", completed: 7 },
    { day: "Fri", completed: 4 },
    { day: "Sat", completed: 2 },
    { day: "Sun", completed: 1 },
  ];

  // Sample data for the category distribution
  const categoryData = [
    { name: "Work", value: 40, color: "#FF6B6B" },
    { name: "Personal", value: 30, color: "#4ECDC4" },
    { name: "Study", value: 20, color: "#FFD166" },
    { name: "Errands", value: 10, color: "#A78BFA" },
  ];

  // Sample stats
  const stats = {
    tasksCompleted: 30,
    completionRate: 75,
    activeDays: 6,
    longestStreak: 9,
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Statistics</h1>
            <p className="text-muted-foreground">
              Track your productivity and task completion progress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard
              title="Tasks Completed"
              value={stats.tasksCompleted}
              icon={<Trophy className="h-5 w-5" />}
              trend="neutral"
              subValue="This month"
            />
            <StatsCard
              title="Completion Rate"
              value={`${stats.completionRate}%`}
              icon={<Target className="h-5 w-5" />}
              trend="up"
              subValue="+12% vs last month"
            />
            <StatsCard
              title="Active Days"
              value={stats.activeDays}
              icon={<Flame className="h-5 w-5" />}
              trend="neutral"
              subValue="6 Days Active 🔥"
            />
            <StatsCard
              title="Longest Streak"
              value={stats.longestStreak}
              icon={<Repeat className="h-5 w-5" />}
              trend="neutral"
              subValue="Keep going!"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <ProgressDonut value={stats.completionRate} className="mb-4 md:mb-0" />
                <div className="w-full md:w-3/5">
                  <TaskBarChart data={weeklyTasksData} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Task Categories</h2>
              <CategoryPieChart data={categoryData} />
            </Card>
          </div>

          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">Activity Streaks</h2>
            <div className="mb-4">
              <p className="text-muted-foreground">
                You've been active for {stats.activeDays} days in a row! Your
                longest streak is {stats.longestStreak} days.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-md flex items-center justify-center ${
                    i < stats.activeDays
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Keep going! You're only {stats.longestStreak - stats.activeDays}{" "}
              days away from your personal best.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stats;
