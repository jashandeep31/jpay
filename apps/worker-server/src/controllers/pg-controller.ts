import { db } from "../lib/db.js";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { env } from "../lib/env.js";

export const getPGpayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { paymentUID } = req.params;
    const { private_key, public_key } = req.body;
    const payment = await db.aPIGeneratedPaymentLink.findUnique({
      where: {
        paymentUID,
      },
    });
    if (!payment) throw new Error("Payment not found");

    const merchantAPiKey = await db.merchantApiKey.findFirst({
      where: {
        publicKey: public_key,
        merchantId: payment.merchantId,
      },
    });
    if (!merchantAPiKey) throw new Error("Invalid API Key");
    const isApiKeyValid = await bcrypt.compare(
      private_key,
      merchantAPiKey.privateKey
    );
    if (!isApiKeyValid) throw new Error("Invalid API Key");
    res.status(200).json({
      message: "Payment data",
      data: {
        amount: payment.amount,
        status: payment.status,
        paidAt: payment.paidAt,
      },
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
    return;
  }
};

export const createPGPaymentLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      amount,
      paymentUID,
      private_key,
      public_key,
      callback_url,
      redirect_url,
    } = req.body;

    if (
      !amount ||
      !private_key ||
      !public_key ||
      !callback_url ||
      !redirect_url ||
      !paymentUID
    ) {
      throw new Error("Missing required fields");
    }

    const apiGeneratedPaymentLink = await db.$transaction(async (tx) => {
      const merchantAPiKey = await tx.merchantApiKey.findUnique({
        where: {
          publicKey: public_key,
        },
        include: {
          merchant: true,
        },
      });

      if (!merchantAPiKey) throw new Error("Invalid API Key");
      const isApiKeyValid = await bcrypt.compare(
        private_key,
        merchantAPiKey.privateKey
      );
      if (!isApiKeyValid) throw new Error("Invalid API Key");

      const apiGeneratedPaymentLink = await tx.aPIGeneratedPaymentLink.create({
        data: {
          merchantId: merchantAPiKey.merchantId,
          amount,
          status: "PROCESSING",
          paymentUID,
          redirectUrl: redirect_url,
          callbackUrl: callback_url,
          validUntil: new Date(Date.now() + 1000 * 60 * 10),
        },
      });

      return apiGeneratedPaymentLink;
    });

    res.status(200).json({
      message: "Payment link generated",
      data: {
        checkout_url: `${env.CHECKOUT_PORTAL_URL}/pg/${apiGeneratedPaymentLink.id}`,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};
