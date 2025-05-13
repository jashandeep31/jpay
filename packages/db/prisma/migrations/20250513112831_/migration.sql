/*
  Warnings:

  - You are about to drop the `PaymentPageFormFilledFormField` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PaymentPageFormFilledFormField" DROP CONSTRAINT "PaymentPageFormFilledFormField_paymentPageFormFieldId_fkey";

-- DropTable
DROP TABLE "PaymentPageFormFilledFormField";

-- CreateTable
CREATE TABLE "PaymentPageFormFilledField" (
    "id" TEXT NOT NULL,
    "paymentPageFormFieldId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentPageFormFilledField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PaymentPageFormFilledField" ADD CONSTRAINT "PaymentPageFormFilledField_paymentPageFormFieldId_fkey" FOREIGN KEY ("paymentPageFormFieldId") REFERENCES "PaymentPageFormField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
