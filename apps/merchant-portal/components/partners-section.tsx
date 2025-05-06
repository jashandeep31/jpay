import { Marquee } from "./marquee";
import Image from "next/image";

export function PartnersSection() {
  const partners = [
    { name: "Solana", width: 120 },
    { name: "USDC", width: 120 },
    { name: "Tether", width: 120 },
    { name: "Phantom", width: 120 },
    { name: "Solflare", width: 120 },
    { name: "Stripe", width: 120 },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
          Trusted by Leading Blockchain Partners
        </h2>
      </div>
      <Marquee pauseOnHover speed={30}>
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center w-48 h-16"
          >
            <Image
              src={`/placeholder-graphic.png?height=40&width=${partner.width}&query=${partner.name} logo`}
              alt={partner.name}
              width={partner.width}
              height={40}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
