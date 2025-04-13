
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatsCard({ title, value, icon, className, subValue, trend }: StatsCardProps) {
  return (
    <motion.div 
      className={cn(
        "p-6 rounded-lg border bg-card transition-all hover:shadow-md",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
          <motion.h4 
            className="text-2xl font-bold" 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            {value}
          </motion.h4>
          
          {subValue && (
            <motion.p 
              className={cn(
                "text-xs mt-2 font-medium flex items-center",
                trend === 'up' && "text-green-500",
                trend === 'down' && "text-red-500",
                trend === 'neutral' && "text-muted-foreground" 
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {trend === 'up' && (
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              )}
              {trend === 'down' && (
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
              {subValue}
            </motion.p>
          )}
        </div>
        
        {icon && (
          <motion.div 
            className="p-3 rounded-md bg-primary/10 text-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {icon}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
