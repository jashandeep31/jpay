import { ShineBorder } from "./shine-border";
import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Sign up for a free account and get started",
    },
    {
      number: "02",
      title: "Setup merchant account",
      description: "Complete your business profile and verification",
    },
    {
      number: "03",
      title: "Create API Key",
      description: "Generate an API key to use in your code",
    },
    {
      number: "04",
      title: "Integrate API",
      description: "Add our simple code snippet to your website or app",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
          How JPay Works
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Getting started with JPay is simple. Follow these steps to begin
          accepting stablecoin payments on your platform.
        </p>

        <div className="relative">
          <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#14F195] to-[#00C2FF] md:hidden"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <ShineBorder
                key={index}
                className="p-6 rounded-xl relative"
                borderClassName="border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#14F195] to-[#00C2FF] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#14F195]" />
                  </div>
                )}
              </ShineBorder>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
