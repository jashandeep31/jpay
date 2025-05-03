"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { ImageIcon, Loader2, UploadIcon, XIcon } from "lucide-react";
import Image from "next/image";

interface LogoUploadStepProps {
  onUploaded: (logoUrl: string) => void;
}

export function LogoUploadStep({ onUploaded }: LogoUploadStepProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset error
    setError(null);

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPEG, PNG, etc.).");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Please upload an image smaller than 5MB.");
      return;
    }

    // Create a preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleUpload = async () => {
    if (!previewUrl) return;

    setIsUploading(true);

    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real app, you would upload the file to a server/storage
      // and get back a URL to the uploaded file

      // For this demo, we'll just use the preview URL
      onUploaded(previewUrl);
    } catch (error) {
      console.error("Error uploading logo:", error);
      setError("Failed to upload logo. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancel = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    // Reset error
    setError(null);

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPEG, PNG, etc.).");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Please upload an image smaller than 5MB.");
      return;
    }

    // Create a preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Upload Your Business Logo</h2>
        <p className="text-muted-foreground">
          Add your business logo to make your profile more recognizable to
          customers.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {/* Logo Preview */}
        <div
          className={`relative flex flex-col items-center justify-center w-48 h-48 border-2 border-dashed rounded-lg ${
            previewUrl ? "border-primary" : "border-gray-300"
          } transition-all duration-200 ${!previewUrl ? "hover:border-primary hover:bg-primary/5" : ""}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {previewUrl ? (
            <div className="relative w-full h-full">
              <Image
                src={previewUrl || "/placeholder.svg"}
                alt="Logo preview"
                fill
                className="object-contain p-2"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
              <ImageIcon className="h-12 w-12 mb-2" />
              <p className="text-sm font-medium">
                Drag and drop your logo here
              </p>
              <p className="text-xs mt-1">or click to browse</p>
            </div>
          )}

          {/* File Input (Hidden) */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </div>

        {/* Error Message */}
        {error && <div className="text-sm text-red-500">{error}</div>}

        {/* Upload Guidelines */}
        <div className="text-sm text-muted-foreground text-center">
          <p className="font-medium">Recommended:</p>
          <ul>
            <li>Square image (1:1 ratio)</li>
            <li>At least 200x200 pixels</li>
            <li>PNG or JPEG format</li>
            <li>Max file size: 5MB</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 w-full max-w-xs">
          {previewUrl ? (
            <>
              <Button
                onClick={handleUpload}
                className="flex-1"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload Logo
                  </>
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
            </>
          ) : (
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadIcon className="mr-2 h-4 w-4" />
              Select Logo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
