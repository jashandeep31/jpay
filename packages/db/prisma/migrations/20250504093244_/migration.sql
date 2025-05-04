/*
  Warnings:

  - A unique constraint covering the columns `[paymentUID]` on the table `APIGeneratedPaymentLink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentUID` to the `APIGeneratedPaymentLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "APIGeneratedPaymentLink" ADD COLUMN     "paymentUID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "APIGeneratedPaymentLink_paymentUID_key" ON "APIGeneratedPaymentLink"("paymentUID");
