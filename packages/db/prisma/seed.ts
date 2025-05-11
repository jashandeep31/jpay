import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const coins = [
    {
      name: "Circle",
      symbol: "USDC",
      authority: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
      logoUrl:
        "https://img.icons8.com/?size=100&id=1jPxlShNofZt&format=png&color=000000",
      decimalCount: 6,
      description: "USDC is a stablecoin pegged to the US dollar.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  for (const coin of coins) {
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
