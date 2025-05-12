/*
  Warnings:

  - The values [PENDING,FAILED] on the enum `PaymentPageStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentPageStatus_new" AS ENUM ('COMPLETED', 'ACTIVE', 'CANCELLED', 'EXPIRED');
ALTER TABLE "PaymentPage" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "PaymentPage" ALTER COLUMN "status" TYPE "PaymentPageStatus_new" USING ("status"::text::"PaymentPageStatus_new");
ALTER TYPE "PaymentPageStatus" RENAME TO "PaymentPageStatus_old";
ALTER TYPE "PaymentPageStatus_new" RENAME TO "PaymentPageStatus";
DROP TYPE "PaymentPageStatus_old";
ALTER TABLE "PaymentPage" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "PaymentPage" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
