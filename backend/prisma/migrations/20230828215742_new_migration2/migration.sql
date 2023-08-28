/*
  Warnings:

  - You are about to drop the column `co2` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "post" DROP COLUMN "co2";

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "co2Produced" INTEGER NOT NULL DEFAULT 0;
