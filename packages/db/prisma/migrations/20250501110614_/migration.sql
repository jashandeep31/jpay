/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `JPayLink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid` to the `JPayLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JPayLink" ADD COLUMN     "uid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "JPayLink_uid_key" ON "JPayLink"("uid");
