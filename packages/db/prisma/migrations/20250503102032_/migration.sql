/*
  Warnings:

  - You are about to drop the column `tag` on the `APIGeneratedPaymentLink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "APIGeneratedPaymentLink" DROP COLUMN "tag";

-- AlterTable
ALTER TABLE "MerchantApiKey" ADD COLUMN     "tag" TEXT DEFAULT 'a';
