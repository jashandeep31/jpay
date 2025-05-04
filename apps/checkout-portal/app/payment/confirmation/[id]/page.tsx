import PaymentSuccess from "@/app/components/payment-success";
import { db } from "@/lib/db";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const initiatedPayment = await db.intiatedPayment.findUnique({
    where: {
      id: params.id,
    },
    include: {
      stableCoin: true,
    },
  });

  if (!initiatedPayment) {
    return <div>Payment not found</div>;
  }
  let pgPayment = null;
  if (
    initiatedPayment.initiatedFrom === "PG_PAYMENT" &&
    initiatedPayment.pgPaymentId
  ) {
    pgPayment = await db.aPIGeneratedPaymentLink.findUnique({
      where: {
        id: initiatedPayment.pgPaymentId,
      },
    });
  }

  return (
    <div>
      <PaymentSuccess
        initiatedPayment={initiatedPayment}
        pgPayment={pgPayment}
      />
    </div>
  );
};

export default page;
