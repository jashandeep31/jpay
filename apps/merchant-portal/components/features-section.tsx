import { GradientCard } from "./gradient-card";
import { Wallet, Zap, Bell, Shield, CreditCard, BarChart3 } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Integrated Wallets",
      description:
        "Seamlessly connect with popular Solana wallets for quick and secure transactions",
      icon: <Wallet className="w-10 h-10 text-[#14F195] mb-4" />,
      comingSoon: false,
    },
    {
      title: "Lightning Fast",
      description:
        "Process payments in under 400ms with Solana's high-performance blockchain",
      icon: <Zap className="w-10 h-10 text-[#00C2FF] mb-4" />,
      comingSoon: false,
    },
    {
      title: "Real-time Alerts",
      description: "Instant transaction notifications via email and WhatsApp",
      icon: <Bell className="w-10 h-10 text-[#9945FF] mb-4" />,
      comingSoon: true,
    },
    {
      title: "Bank-grade Security",
      description: "Enterprise-level encryption and multi-signature protection",
      icon: <Shield className="w-10 h-10 text-[#14F195] mb-4" />,
      comingSoon: false,
    },
    {
      title: "Low Transaction Fees",
      description: "Minimal fees compared to traditional payment processors",
      icon: <CreditCard className="w-10 h-10 text-[#00C2FF] mb-4" />,
      comingSoon: false,
    },
    {
      title: "Detailed Analytics",
      description:
        "Comprehensive dashboard with real-time transaction insights",
      icon: <BarChart3 className="w-10 h-10 text-[#9945FF] mb-4" />,
      comingSoon: true,
    },
  ];

  return (
    <section id="features" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
          Powerful Features for Modern Payments
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          JPay combines the speed and efficiency of the Solana blockchain with
          user-friendly features designed to make stablecoin payments simple,
          secure, and seamless.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <GradientCard key={feature.title}>
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
                {feature.comingSoon && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent/10 text-primary">
                    Soon
                  </span>
                )}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
