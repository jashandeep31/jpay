/*
  Warnings:

  - A unique constraint covering the columns `[paymentPageId]` on the table `PaymentPageForm` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PaymentPageForm_paymentPageId_key" ON "PaymentPageForm"("paymentPageId");
