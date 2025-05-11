"use server";

import { auth } from "@/auth";
import { db, redisConnection } from "@/lib/db";
import { generatePresignedUrl } from "@/lib/s3-config";
import { ServerActionResponseToClient } from "@/types/server-actions";

export async function updatePaymentWalletAddress(
  walletAddress: string
): Promise<ServerActionResponseToClient<{ message: string }>> {
  try {
    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized");
    }
    await db.merchant.update({
      where: {
        id: session.merchantId,
      },
      data: {
        paymentReceivingWalletAddress: walletAddress,
      },
    });
    return {
      ok: true,
      data: { message: "Payment wallet address updated" },
    };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export async function generateProfileLogoUploadUrl(
  fileName: string,
  fileType: "image/jpeg" | "image/png"
) {
  try {
    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      throw new Error("Invalid file type");
    }
    const result = await generatePresignedUrl(
      "merchant/profile/logo",
      fileName,
      fileType,
      3600 // 1 hour expiration
    );

    if (!result) {
      throw new Error("Failed to generate upload URL");
    }

    const { presignedUrl, uploadId } = result;
    console.log(presignedUrl);
    if (!presignedUrl) {
      throw new Error("Failed to generate upload URL");
    }

    return { presignedUrl, uploadId };
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    throw new Error("Failed to generate upload URL");
  }
}

export async function updateLogoUrl(uploadId: string) {
  try {
    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized");
    }
    const upload = await redisConnection.hgetall(uploadId);
    if (!upload) {
      throw new Error("Upload not found");
    }

    await db.merchant.update({
      where: {
        id: session.merchantId,
      },
      data: {
        logoUrl: upload.publicUrl,
      },
    });
    await redisConnection.del(uploadId);
  } catch (error) {
    console.error("Error updating logo URL:", error);
    throw new Error("Failed to update logo URL");
  }
}
