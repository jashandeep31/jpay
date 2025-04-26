"use client";

import { useInView } from "react-intersection-observer";
import { Code, Database, Webhook, ShoppingBag } from "lucide-react";

const devFeatures = [
  {
    title: "REST & GraphQL APIs",
    description: "JS + Python SDKs",
    icon: Code,
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications",
    icon: Webhook,
  },
  {
    title: "Sandbox/Testnet",
    description: "Test in a safe environment",
    icon: Database,
  },
  {
    title: "Shopify/WooCommerce",
    description: "E-commerce plugins",
    icon: ShoppingBag,
  },
];

export default function DeveloperEcosystem() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="developers" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center text-gray-900 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Developer Ecosystem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {devFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-blue-500/30 duration-700 delay-${index * 100} ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-blue-500 animate-pulse-slow" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block bg-gray-100 rounded-full px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-300">
            <code className="font-mono">npm install @jpay/sdk</code>
          </div>
        </div>
      </div>
    </section>
  );
}
