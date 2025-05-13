/*
  Warnings:

  - You are about to drop the `PaymentPageFormFilledForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentPageFilledFormStatus" AS ENUM ('PENDING', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "PaymentPageFormFilledForm" DROP CONSTRAINT "PaymentPageFormFilledForm_paymentPageId_fkey";

-- DropTable
DROP TABLE "PaymentPageFormFilledForm";

-- DropEnum
DROP TYPE "PaymentPageFormFilledFormStatus";

-- CreateTable
CREATE TABLE "PaymentPageFilledForm" (
    "id" TEXT NOT NULL,
    "paymentPageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "PaymentPageFilledFormStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "PaymentPageFilledForm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PaymentPageFilledForm" ADD CONSTRAINT "PaymentPageFilledForm_paymentPageId_fkey" FOREIGN KEY ("paymentPageId") REFERENCES "PaymentPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
