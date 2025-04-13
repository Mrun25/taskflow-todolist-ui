
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Calendar, Home, LayoutDashboard, Settings } from "lucide-react";
import { SpaceshipToggle } from "./SpaceshipToggle";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        "flex items-center gap-3 py-3 px-4 rounded-lg transition-all relative group",
        isActive
          ? isDark
            ? "bg-sidebar-accent text-primary shadow-[0_0_10px_rgba(139,92,246,0.3)]"
            : "bg-sidebar-accent text-primary shadow-md"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon
          className={cn(
            "h-5 w-5 transition-all",
            isActive && isDark && "text-primary animate-pulse-glow"
          )}
        />
      </motion.div>
      <span className="font-medium">{label}</span>
      
      {isActive && (
        <motion.div
          layoutId="sidebar-active-indicator"
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full",
            isDark ? "bg-primary" : "bg-primary"
          )}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </Link>
  );
}

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <motion.div 
      className={cn(
        "h-screen w-64 border-r bg-sidebar flex flex-col",
        isDark && "shadow-[inset_-5px_0px_15px_rgba(0,0,0,0.1)]"
      )}
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <motion.div 
        className="p-5 border-b" 
        variants={childVariants}
      >
        <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
          <motion.span 
            className="h-7 w-7 bg-primary rounded-md flex items-center justify-center text-white text-xs"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            TF
          </motion.span>
          TaskFlow
        </h1>
      </motion.div>

      <nav className="flex-1 p-4 space-y-2">
        <motion.div variants={childVariants}>
          <SidebarLink
            to="/"
            icon={Home}
            label="Tasks"
            isActive={currentPath === "/"}
          />
        </motion.div>
        
        <motion.div variants={childVariants}>
          <SidebarLink
            to="/calendar"
            icon={Calendar}
            label="Calendar"
            isActive={currentPath === "/calendar"}
          />
        </motion.div>
        
        <motion.div variants={childVariants}>
          <SidebarLink
            to="/stats"
            icon={LayoutDashboard}
            label="Stats"
            isActive={currentPath === "/stats"}
          />
        </motion.div>
        
        <motion.div variants={childVariants}>
          <SidebarLink
            to="/settings"
            icon={Settings}
            label="Settings"
            isActive={currentPath === "/settings"}
          />
        </motion.div>
      </nav>

      <motion.div 
        className="p-4 border-t flex items-center justify-between"
        variants={childVariants}
      >
        <div className="flex items-center space-x-2 group">
          <motion.div 
            className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs font-medium">UA</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xs font-medium transition-colors group-hover:text-primary">User</span>
            <span className="text-xs text-muted-foreground">Free Plan</span>
          </div>
        </div>
        <SpaceshipToggle />
      </motion.div>
    </motion.div>
  );
}
