"use server";

import { auth } from "@/auth";
import { db, redisConnection } from "@/lib/db";
import { PaymentPage } from "@repo/db";
import { ServerActionResponseToClient } from "@/types/server-actions";
import { IPaymentPageFormField } from "../create/page";

export async function getPaymentPages(): Promise<
  ServerActionResponseToClient<
    Omit<PaymentPage, "amount">[] & { amount: number }[]
  >
> {
  try {
    const session = await auth();
    if (!session?.merchantId) throw new Error("Unauthorized");

    const paymentPages = await db.paymentPage.findMany({
      where: {
        merchantId: session.merchantId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      ok: true,
      data: paymentPages.map((paymentPage) => ({
        ...paymentPage,
        amount: paymentPage.amount.toNumber(),
      })),
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function createPaymentPage(data: {
  title: string;
  description: string | undefined;
  image: string;
  amount: number;
  expiresAt: Date;
  fields: IPaymentPageFormField[];
}): Promise<
  ServerActionResponseToClient<Omit<PaymentPage, "amount"> & { amount: number }>
> {
  try {
    const session = await auth();
    if (!session?.user) throw new Error("Unauthorized");

    const imageUrl = async () => {
      const image = await redisConnection.hgetall(data.image);
      redisConnection.del(data.image);
      return image.publicUrl;
    };

    const paymentPage = await db.$transaction(async (tx) => {
      const paymentPage = await tx.paymentPage.create({
        data: {
          title: data.title,
          description: data.description,
          logoUrl: await imageUrl(),
          amount: data.amount,
          merchantId: session.merchantId,
          expiresAt: data.expiresAt,
        },
      });

      const paymentPageForm = await tx.paymentPageForm.create({
        data: {
          paymentPageId: paymentPage.id,
        },
      });

      await tx.paymentPageFormField.createMany({
        data: data.fields.map((field) => ({
          paymentPageFormId: paymentPageForm.id,
          type: field.type,
          label: field.label,
          placeholder: field.placeholder,
          required: field.required,
        })),
      });

      return paymentPage;
    });

    return {
      ok: true,
      data: {
        ...paymentPage,
        amount: paymentPage.amount.toNumber(),
      },
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function cancelPaymentPage(data: {
  id: string;
}): Promise<
  ServerActionResponseToClient<Omit<PaymentPage, "amount"> & { amount: number }>
> {
  try {
    const session = await auth();
    if (!session?.user) throw new Error("Unauthorized");

    const existingPage = await db.paymentPage.findUnique({
      where: { id: data.id, merchantId: session.merchantId },
    });

    if (!existingPage) {
      throw new Error("Payment page not found");
    }

    if (!["ACTIVE", "PENDING"].includes(existingPage.status)) {
      throw new Error("Payment page cannot be cancelled in its current status");
    }

    const paymentPage = await db.paymentPage.update({
      where: { id: data.id, merchantId: session.merchantId },
      data: { status: "CANCELLED" },
    });

    if (!paymentPage) throw new Error("Payment page not found");

    return {
      ok: true,
      data: {
        ...paymentPage,
        amount: paymentPage.amount.toNumber(),
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown error",
    };
  }
}
