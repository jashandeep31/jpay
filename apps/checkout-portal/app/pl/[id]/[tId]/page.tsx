import { db } from "@/lib/db";
import { PaymentDetailsClient } from "./payment-details-client";

interface PageProps {
  params: Promise<{ id: string; tId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { tId } = await params;
  const initiatedPayment = await db.intiatedPayment.findUnique({
    where: {
      id: tId,
    },
    include: {
      stableCoin: true,
      merchant: {
        select: {
          name: true,
          logoUrl: true,
        },
      },
    },
  });

  const walletAddress = initiatedPayment?.walletAddress;
  const amount = Number(initiatedPayment?.amount);

  if (!initiatedPayment || !walletAddress || !amount) {
    return <div>Payment not found</div>;
  }

  return <PaymentDetailsClient initiatedPayment={initiatedPayment} />;
}
