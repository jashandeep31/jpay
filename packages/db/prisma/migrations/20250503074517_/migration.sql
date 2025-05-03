/*
  Warnings:

  - You are about to drop the `WebApiPaymentTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WebApiPaymentTransaction" DROP CONSTRAINT "WebApiPaymentTransaction_merchantId_fkey";

-- DropTable
DROP TABLE "WebApiPaymentTransaction";

-- DropEnum
DROP TYPE "ApiPaymentTransaction";
