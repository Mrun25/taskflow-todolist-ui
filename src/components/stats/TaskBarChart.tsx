
import { useTheme } from "@/contexts/ThemeContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

interface TaskBarChartProps {
  data: {
    day: string;
    completed: number;
  }[];
}

export function TaskBarChart({ data }: TaskBarChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
          />
          <XAxis
            dataKey="day"
            tick={{ fill: isDark ? "#f8fafc" : "#334155", fontSize: 12 }}
          />
          <YAxis
            tick={{ fill: isDark ? "#f8fafc" : "#334155", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1e293b" : "#ffffff",
              border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
              borderRadius: "0.5rem",
              color: isDark ? "#f8fafc" : "#334155",
            }}
          />
          <Bar
            dataKey="completed"
            name="Tasks Completed"
            radius={[4, 4, 0, 0]}
            fill={isDark ? "#8b5cf6" : "#8b5cf6"}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
