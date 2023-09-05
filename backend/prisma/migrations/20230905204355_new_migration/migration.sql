-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "otp" INTEGER;
