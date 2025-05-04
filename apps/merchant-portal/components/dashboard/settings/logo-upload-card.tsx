"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { ImageIcon, Loader2, UploadIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import {
  generateProfileLogoUploadUrl,
  updateLogoUrl,
} from "@/app/dashboard/settings/_actions";

interface LogoUploadCardProps {
  currentLogo: string;
  onLogoUpdate: (logoUrl: string) => void;
}

export function LogoUploadCard({
  currentLogo,
  onLogoUpdate,
}: LogoUploadCardProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [rawFile, setRawFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setRawFile(file);

    // Validate file type
    if (!file.type.match(/^image\/(jpeg|png)$/)) {
      toast.error("Please upload a JPEG or PNG image file.");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Please upload an image smaller than 5MB.");
      return;
    }

    // Create a preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!rawFile || !previewUrl) return;
    setIsUploading(true);
    console.log(rawFile);
    try {
      // Get presigned URL for direct upload
      const contentType = rawFile.type as "image/jpeg" | "image/png";
      const result = await generateProfileLogoUploadUrl(
        rawFile.name,
        contentType
      );
      if (!result) {
        throw new Error("Failed to generate upload URL");
      }
      const { presignedUrl, uploadId } = result;

      const response = await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": contentType,
        },
        body: rawFile,
      });

      if (!response.ok) {
        throw new Error("Failed to upload to S3");
      }

      await updateLogoUrl(uploadId);
      toast.success("Logo uploaded successfully");
    } catch (error) {
      console.error("Error uploading logo:", error);
      toast.error("Failed to upload logo. Please try again.");
    } finally {
      setIsUploading(false);
      setSelectedFile(null);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
    }
  };

  const handleCancel = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    setSelectedFile(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Logo</CardTitle>
        <CardDescription>
          Upload or update your merchant logo. Recommended size: 200x200px.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative h-48 w-48 overflow-hidden rounded-md border flex items-center justify-center">
            {previewUrl || currentLogo ? (
              <Image
                src={previewUrl || currentLogo}
                alt="Merchant logo"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="h-10 w-10" />
                <span className="mt-2 text-sm">No logo</span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <div className="text-sm text-muted-foreground">
              <p>Upload a logo for your merchant profile.</p>
              <p>Recommended: Square image, at least 200x200 pixels.</p>
              <p>Max file size: 5MB</p>
              <p>Supported formats: JPEG, PNG</p>
            </div>

            {!previewUrl ? (
              <div>
                <Button asChild>
                  <label className="cursor-pointer">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload Logo
                    <input
                      type="file"
                      accept="image/jpeg,image/png"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button onClick={handleUpload} disabled={isUploading}>
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    "Save Logo"
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isUploading}
                >
                  <XIcon className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
