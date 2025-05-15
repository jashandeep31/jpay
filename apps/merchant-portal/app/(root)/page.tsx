import { HeroSection } from "@/components/hero-section";
// import { PartnersSection } from "@/components/partners-section";
import { FeaturesSection } from "@/components/features-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { DevelopersSection } from "@/components/developers-section";
import { CTASection } from "@/components/cta-section";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.merchantId) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      {/* <PartnersSection /> */}
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <DevelopersSection />
      <CTASection />
    </main>
  );
}
