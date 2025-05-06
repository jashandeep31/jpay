import type React from "react"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
}

// Enhance the GradientCard component with hover effects
export function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={`relative rounded-xl bg-gradient-to-b from-neutral-800/10 to-neutral-800/30 p-[1px] backdrop-blur-3xl transition-all duration-300 hover:from-[#14F195]/10 hover:to-[#00C2FF]/10 ${className}`}
    >
      <div className="relative rounded-xl bg-black p-6 h-full">{children}</div>
    </div>
  )
}
