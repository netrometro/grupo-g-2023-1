/*
  Warnings:

  - You are about to drop the column `categorypostId` on the `InfoPost` table. All the data in the column will be lost.
  - You are about to drop the `CategoryPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InfoPost" DROP CONSTRAINT "InfoPost_categorypostId_fkey";

-- AlterTable
ALTER TABLE "InfoPost" DROP COLUMN "categorypostId";

-- DropTable
DROP TABLE "CategoryPost";
