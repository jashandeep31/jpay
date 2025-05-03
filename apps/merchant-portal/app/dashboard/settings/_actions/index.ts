"use server";

import { generatePresignedUrl } from "@/lib/s3-config";

export async function generateProfileLogoUploadUrl(
  fileName: string,
  fileType: "image/jpeg" | "image/png"
) {
  try {
    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      throw new Error("Invalid file type");
    }
    const presignedUrl = await generatePresignedUrl(
      "merchant/profile/logo",
      fileName,
      fileType,
      3600 // 1 hour expiration
    );
    console.log(presignedUrl);
    if (!presignedUrl) {
      throw new Error("Failed to generate upload URL");
    }

    return presignedUrl;
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    throw new Error("Failed to generate upload URL");
  }
}
