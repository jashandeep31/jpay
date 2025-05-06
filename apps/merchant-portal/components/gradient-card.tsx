import type React from "react";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

// Enhance the GradientCard component with hover effects
export function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={`relative rounded-xl bg-accent/10 p-[1px] backdrop-blur-3xl transition-all duration-300 hover:bg-accent/20 ${className}`}
    >
      <div className="relative rounded-xl bg-background p-6 h-full">
        {children}
      </div>
    </div>
  );
}
