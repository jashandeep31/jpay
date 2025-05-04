"use server";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import { redisConnection } from "./db";

const s3Client = new S3Client({
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const uploadToS3 = async (
  path: string,
  name: string,
  file: Buffer
): Promise<string | null> => {
  try {
    if (!file || file.length === 0) {
      throw new Error("Invalid file buffer");
    }
    if (!path || !name) {
      throw new Error("Path and name are required");
    }

    const filename = `${uuidv4()}-${name}`;
    const key = `${path}/${filename}`;
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET!,
      Key: key,
      Body: file,
      ACL: "public-read",
    });
    await s3Client.send(command);
    return `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${key}`;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    return null;
  }
};

const generatePresignedUrl = async (
  path: string,
  name: string,
  contentType: "image/jpeg" | "image/png" | "image/webp" | "application/pdf",
  expiresIn: number = 60 * 5 // Default 5 minutes
): Promise<{ presignedUrl: string; uploadId: string } | null> => {
  try {
    if (!path || !name) {
      throw new Error("Path and name are required");
    }
    const uploadId = uuidv4();
    const filename = `${uploadId}-${name}`;
    const key = `${path}/${filename}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET!,
      Key: key,
      ContentType: contentType,
    });

    const presignedUrl = await getSignedUrl(s3Client, command, {
      expiresIn,
      signingDate: new Date(),
    });
    await redisConnection.hset(uploadId, {
      key,
      contentType,
      status: "pending",
      publicUrl: `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${key}`,
      expiresAt: String(Date.now() + expiresIn * 1000),
    });
    await redisConnection.expire(uploadId, expiresIn);
    return { presignedUrl, uploadId };
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return null;
  }
};

// This function will be called automatically when Redis keys expire
export const autoCleanupExpiredUploads = async (expiredKey: string) => {
  try {
    const upload = await redisConnection.hgetall(expiredKey);

    // Skip if no upload data
    if (!upload) {
      console.log(`No upload data found for expired key: ${expiredKey}`);
      return;
    }

    // Only delete if the upload was not completed
    if (upload.status !== "completed") {
      // Delete from S3
      const deleteCommand = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET!,
        Key: upload.key,
      });
      await s3Client.send(deleteCommand);
      console.log(`Successfully cleaned up expired upload: ${expiredKey}`);
    } else {
      console.log(`Skipping cleanup for completed upload: ${expiredKey}`);
    }
  } catch (error) {
    console.error(`Error in auto cleanup for key ${expiredKey}:`, error);
    // Re-throw the error to ensure it's properly logged
    throw error;
  }
};

// Set up Redis key expiration listener with error handling
redisConnection.on("expired", async (key: string) => {
  try {
    await autoCleanupExpiredUploads(key);
  } catch (error) {
    console.error(`Failed to handle expired key ${key}:`, error);
  }
});

// Add a function to manually trigger cleanup for failed uploads
export const cleanupFailedUploads = async (hoursOld: number = 24) => {
  try {
    const keys = await redisConnection.keys("*");
    const now = Date.now();

    for (const key of keys) {
      const upload = await redisConnection.hgetall(key);
      if (upload && upload.status === "pending") {
        const expiresAt = parseInt(upload.expiresAt || "0");
        const ageInHours = (now - expiresAt) / (1000 * 60 * 60);

        if (ageInHours >= hoursOld) {
          await autoCleanupExpiredUploads(key);
        }
      }
    }
  } catch (error) {
    console.error("Error cleaning up failed uploads:", error);
    throw error;
  }
};

export { uploadToS3, generatePresignedUrl };
