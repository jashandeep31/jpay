/*
  Warnings:

  - Added the required column `tag` to the `APIGeneratedPaymentLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "APIGeneratedPaymentLink" ADD COLUMN     "tag" TEXT NOT NULL;
