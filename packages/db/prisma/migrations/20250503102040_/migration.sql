/*
  Warnings:

  - Made the column `tag` on table `MerchantApiKey` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MerchantApiKey" ALTER COLUMN "tag" SET NOT NULL,
ALTER COLUMN "tag" DROP DEFAULT;
