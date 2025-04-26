"use client";
import { useInView } from "react-intersection-observer";
import { Coins, Link, Zap, Wallet, Fuel, GitMerge } from "lucide-react";

const features = [
  {
    title: "Multi-Stablecoin Support",
    description: "Accept USDC, USDT, USDP on Solana",
    icon: Coins,
  },
  {
    title: "Payment Links & QR Codes",
    description: "Instant invoicing via link or QR",
    icon: Link,
  },
  {
    title: "Instant Settlement",
    description: "On-chain confirmation in seconds",
    icon: Zap,
  },
  {
    title: "Wallet Integrations",
    description: "MetaMask, Phantom, Solflare deep links",
    icon: Wallet,
  },
  {
    title: "Gas Abstraction",
    description: "Zero gas for your customers",
    icon: Fuel,
  },
  {
    title: "Smart Routing",
    description: "Auto-choose fastest Solana programs",
    icon: GitMerge,
  },
];

export default function FeaturesGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center text-gray-900 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Core Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-blue-500/30 duration-700 delay-${index * 100} ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 animate-pulse-slow">
                <feature.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
