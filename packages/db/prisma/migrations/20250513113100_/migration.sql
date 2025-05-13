/*
  Warnings:

  - Added the required column `paymentPageFilledFormId` to the `PaymentPageFormFilledField` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentPageFormFilledField" ADD COLUMN     "paymentPageFilledFormId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PaymentPageFormFilledField" ADD CONSTRAINT "PaymentPageFormFilledField_paymentPageFilledFormId_fkey" FOREIGN KEY ("paymentPageFilledFormId") REFERENCES "PaymentPageFilledForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
