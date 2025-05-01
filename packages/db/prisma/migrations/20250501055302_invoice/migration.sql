/*
  Warnings:

  - You are about to drop the column `intiatedPaymentId` on the `Invoice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_intiatedPaymentId_fkey";

-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "invoiceId" TEXT;

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "intiatedPaymentId";

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
