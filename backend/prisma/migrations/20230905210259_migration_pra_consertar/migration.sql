/*
  Warnings:

  - You are about to drop the column `otp` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "otp",
ADD COLUMN     "userOtp" INTEGER;
