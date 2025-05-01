"use server";

import { auth } from "@/auth";
import { db } from "@/db";

// model Invoice {
//     id         String @id @default(uuid())
//     merchantId String

//     invoiceNumber     String
//     invoiceDate       DateTime
//     dueDate           DateTime
//     pdfLink           String?
//     status            InvoiceStatus @default(ACTIVE)
//     amount            Decimal       @db.Decimal(10, 2)
//     intiatedPaymentId String

//     merchant  Merchant @relation(fields: [merchantId], references: [id])
//     updatedAt DateTime @updatedAt
//     createdAt DateTime @default(now())

//     initiatedPayment IntiatedPayment @relation(fields: [intiatedPaymentId], references: [id])
//   }

//   enum InvoiceStatus {
//     PENDING
//     ACTIVE
//     PAID
//     CANCELLED
//   }

export interface CreateInvoiceProps {
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  amount: number;
}

export const createInvoice = async ({
  invoiceNumber,
  invoiceDate,
  dueDate,
  amount,
}: CreateInvoiceProps) => {
  try {
    const session = await auth();
    if (!session?.merchantId) throw new Error("Unauthorized");
    const invoice = await db.invoice.create({
      data: {
        invoiceNumber,
        invoiceDate,
        dueDate,
        amount,
        merchantId: session.merchantId,
      },
    });
    return {
      ok: true,
      data: {
        id: invoice.id,
      },
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
