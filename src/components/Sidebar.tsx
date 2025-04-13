
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Calendar, Home, LayoutDashboard, Settings } from "lucide-react";
import { SpaceshipToggle } from "./SpaceshipToggle";
import { useLocation, Link } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

function SidebarLink({ to, icon: Icon, label, isActive }: SidebarLinkProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 py-3 px-4 rounded-lg transition-all",
        isActive
          ? isDark
            ? "bg-sidebar-accent text-primary shadow-[0_0_10px_rgba(139,92,246,0.3)]"
            : "bg-sidebar-accent text-primary shadow-md"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      <Icon
        className={cn(
          "h-5 w-5",
          isActive && isDark && "text-primary animate-pulse-glow"
        )}
      />
      <span className="font-medium">{label}</span>
    </Link>
  );
}

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="h-screen w-64 border-r bg-sidebar flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
          <span className="h-6 w-6 bg-primary rounded-md flex items-center justify-center text-white text-xs">TF</span>
          TaskFlow
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <SidebarLink
          to="/"
          icon={Home}
          label="Tasks"
          isActive={currentPath === "/"}
        />
        <SidebarLink
          to="/calendar"
          icon={Calendar}
          label="Calendar"
          isActive={currentPath === "/calendar"}
        />
        <SidebarLink
          to="/stats"
          icon={LayoutDashboard}
          label="Stats"
          isActive={currentPath === "/stats"}
        />
        <SidebarLink
          to="/settings"
          icon={Settings}
          label="Settings"
          isActive={currentPath === "/settings"}
        />
      </nav>

      <div className="p-4 border-t flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="text-xs font-medium">UA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">User</span>
            <span className="text-xs text-muted-foreground">Free Plan</span>
          </div>
        </div>
        <SpaceshipToggle />
      </div>
    </div>
  );
}
