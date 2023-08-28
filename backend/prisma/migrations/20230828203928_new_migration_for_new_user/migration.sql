/*
  Warnings:

  - You are about to alter the column `co2Emitted` on the `post` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "post" ALTER COLUMN "co2Emitted" SET DEFAULT 0,
ALTER COLUMN "co2Emitted" SET DATA TYPE INTEGER;
