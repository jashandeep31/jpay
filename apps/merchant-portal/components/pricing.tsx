"use client";

import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Up to $10,000 in monthly volume",
      "Accept USDC & USDT",
      "Basic payment links",
      "Standard support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Up to $100,000 in monthly volume",
      "Accept all stablecoins",
      "Custom payment links & QR codes",
      "Basic wallet integrations",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    description: "For established businesses",
    features: [
      "Up to $1M in monthly volume",
      "All Basic features",
      "Yield on balances",
      "Programmable escrow",
      "Micro-payments & streaming",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited volume",
      "All Pro features",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "24/7 phone support",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center text-gray-900 mb-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Pricing
        </h2>
        <p
          className={`text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Choose the plan that fits your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border ${
                tier.highlighted ? "border-blue-500" : "border-gray-100"
              } transition-all duration-700 delay-${index * 100} hover:shadow-md ${
                tier.highlighted
                  ? "relative z-10 scale-105 md:-mt-4 md:-mb-4"
                  : ""
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-0 right-0 text-center">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <Button
                  className={`w-full mb-8 ${
                    tier.highlighted
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50"
                  }`}
                >
                  {tier.cta}
                </Button>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
