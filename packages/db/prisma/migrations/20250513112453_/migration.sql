/*
  Warnings:

  - You are about to drop the `PaymentPageFormFieldValue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PaymentPageFormFieldValue" DROP CONSTRAINT "PaymentPageFormFieldValue_paymentPageFormFieldId_fkey";

-- DropTable
DROP TABLE "PaymentPageFormFieldValue";
