"use client";

import { useInView } from "react-intersection-observer";
import { Percent, ShieldCheck, Timer, FileSpreadsheet } from "lucide-react";

const modules = [
  {
    title: "Yield on Balances",
    description: "Earn DeFi APY while funds idle",
    icon: Percent,
  },
  {
    title: "Programmable Escrow",
    description: "Built-in dispute & release flows",
    icon: ShieldCheck,
  },
  {
    title: "Micro-Payments & Streaming",
    description: "Superfluid-style per-second billing",
    icon: Timer,
  },
  {
    title: "Bulk Payouts",
    description: "CSV mass vendor payments",
    icon: FileSpreadsheet,
  },
];

export default function AdvancedModules() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="modules" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center text-gray-900 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Advanced Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border border-gray-100 transition-all hover:border-blue-500/30 duration-700 delay-${index * 100} ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 relative">
                <module.icon className="w-6 h-6 text-blue-500 animate-float" />
                <div className="absolute inset-0 rounded-lg bg-blue-500/5 animate-ping-slow opacity-70"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
