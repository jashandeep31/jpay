"use client";

import { useInView } from "react-intersection-observer";
import { ShieldCheck, AlertCircle, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    title: "Tiered KYC/AML onboarding",
    icon: ShieldCheck,
  },
  {
    title: "AI-driven fraud detection",
    icon: AlertCircle,
  },
  {
    title: "SOC-2 & smart-contract audits",
    icon: FileCheck,
  },
];

export default function SecurityCompliance() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="security" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center text-gray-900 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Security & Compliance
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex-1 text-center p-8 rounded-lg border border-gray-100 transition-all hover:border-blue-500/30 duration-700 delay-${index * 100} ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <feature.icon className="w-6 h-6 text-blue-500" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
