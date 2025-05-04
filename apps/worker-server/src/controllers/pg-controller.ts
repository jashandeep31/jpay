import { db } from "../lib/db.js";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { env } from "../lib/env.js";

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
    console.log(`${env.CHECKOUT_PORTAL_URL}/pg/${apiGeneratedPaymentLink.id}`);
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
