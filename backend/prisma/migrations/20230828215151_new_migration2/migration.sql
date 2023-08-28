/*
  Warnings:

  - You are about to drop the column `co2Emitted` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "post" DROP COLUMN "co2Emitted",
ADD COLUMN     "co2" INTEGER NOT NULL DEFAULT 0;
