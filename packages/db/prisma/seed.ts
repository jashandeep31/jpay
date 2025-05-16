import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const coins = [
    {
      name: "Circle",
      symbol: "USDC",
      tokenAddress: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
      authority: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
      logoUrl:
        "https://img.icons8.com/?size=100&id=1jPxlShNofZt&format=png&color=000000",
      decimalCount: 6,
      description: "USDC is a stablecoin pegged to the US dollar.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Tether",
      symbol: "USDT",
      tokenAddress: "97opqBLXQGb1brcHRDyGfdZCacJhYJ6KnrN5v6t4Uc8B",
      authority: "97opqBLXQGb1brcHRDyGfdZCacJhYJ6KnrN5v6t4Uc8B",
      logoUrl:
        "https://img.icons8.com/?size=100&id=wZm3ymBvyMGj&format=png&color=000000",
      decimalCount: 6,
      description: "USDT is a stablecoin pegged to the US dollar.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Huobi",
      symbol: "HUSD",
      authority: "A2qV8LFdRNohdC3ZR4wD9J3z8KCw628ogy8esFJbWVzw",
      tokenAddress: "A2qV8LFdRNohdC3ZR4wD9J3z8KCw628ogy8esFJbWVzw",
      logoUrl: "https://img.cryptorank.io/coins/husd1586879836461.png",
      decimalCount: 6,
      description: "HUSD is a stablecoin pegged to the US dollar.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Dai",
      symbol: "DAI",
      authority: "EbHTHMEv3QRDuoxrjrSgXxia7WtZPDnZSNDNm5mgVKep",
      tokenAddress: "EbHTHMEv3QRDuoxrjrSgXxia7WtZPDnZSNDNm5mgVKep",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png",
      decimalCount: 6,
      description: "DAI is a stablecoin pegged to the US dollar.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  for (const coin of coins) {
    const existingCoin = await prisma.stableCoin.findUnique({
      where: {
        symbol: coin.symbol,
      },
    });
    if (existingCoin) {
      continue;
    }
    await prisma.stableCoin.create({
      data: coin,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
