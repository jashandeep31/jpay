/*
  Warnings:

  - A unique constraint covering the columns `[intiatedPaymentId]` on the table `PaymentPageFilledForm` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `intiatedPaymentId` to the `PaymentPageFilledForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentPageFilledForm" ADD COLUMN     "intiatedPaymentId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PaymentPageFilledForm_intiatedPaymentId_key" ON "PaymentPageFilledForm"("intiatedPaymentId");

-- AddForeignKey
ALTER TABLE "PaymentPageFilledForm" ADD CONSTRAINT "PaymentPageFilledForm_intiatedPaymentId_fkey" FOREIGN KEY ("intiatedPaymentId") REFERENCES "IntiatedPayment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
