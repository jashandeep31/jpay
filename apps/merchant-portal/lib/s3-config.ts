import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

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
  expiresIn: number = 3600 // Default 1 hour
): Promise<string | null> => {
  try {
    if (!path || !name) {
      throw new Error("Path and name are required");
    }

    const filename = `${uuidv4()}-${name}`;
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
    return presignedUrl;
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return null;
  }
};

export { uploadToS3, generatePresignedUrl };
