-- DropForeignKey
ALTER TABLE "PaymentPageFilledForm" DROP CONSTRAINT "PaymentPageFilledForm_intiatedPaymentId_fkey";

-- AlterTable
ALTER TABLE "PaymentPageFilledForm" ALTER COLUMN "intiatedPaymentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PaymentPageFilledForm" ADD CONSTRAINT "PaymentPageFilledForm_intiatedPaymentId_fkey" FOREIGN KEY ("intiatedPaymentId") REFERENCES "IntiatedPayment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
