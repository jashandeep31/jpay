import { PaymentDetailsClient } from "@/app/components/payment-details-client";
import { db } from "@/lib/db";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const initiatedPayment = await db.intiatedPayment.findUnique({
    where: {
      id: id,
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PaymentDetailsClient initiatedPayment={initiatedPayment} />
    </div>
  );
}
