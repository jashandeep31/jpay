"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { generatePresignedUrl } from "@/lib/s3-config";
import { ServerActionResponseToClient } from "@/types/server-actions";

export async function getProfilePicturePresignedUrl(
  fileName: string,
  fileType: "image/jpeg" | "image/png"
): Promise<
  ServerActionResponseToClient<{ presignedUrl: string; uploadId: string }>
> {
  try {
    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized");
    }
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
    return {
      ok: true,
      data: { presignedUrl, uploadId },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Something went wrong",
    };
  }
}

export async function updateCompleteProfile({
  phoneNumber,
  countryCode,
  businessName,
  description,
  address,
}: {
  phoneNumber: number;
  countryCode: string;
  businessName: string;
  description: string;
  address: string;
}): Promise<ServerActionResponseToClient<{ id: string }>> {
  try {
    const session = await auth();
    if (!session?.merchantId) throw new Error("Unauthorized");
    await db.merchant.update({
      where: {
        id: session.merchantId,
      },
      data: {
        phoneNumber: `${countryCode.replace("+", "").trim()}${phoneNumber}`,
        name: businessName,
        description,
        logoUrl:
          "https://job2tech-public.s3.us-east-1.amazonaws.com/merchant/profile/logo/4b4a5296-d9c9-4ecf-8ab1-40ebc901bc48-usdt.png",
        profileCompleted: true,
        address,
      },
    });

    return {
      ok: true,
      data: { id: session.merchantId },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Something went wrong",
    };
  }
}
