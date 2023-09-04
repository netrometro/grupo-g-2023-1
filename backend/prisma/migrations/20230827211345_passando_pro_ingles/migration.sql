/*
  Warnings:

  - You are about to drop the column `nome` on the `CategoryPost` table. All the data in the column will be lost.
  - You are about to drop the column `texto` on the `InfoPost` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `InfoPost` table. All the data in the column will be lost.
  - Added the required column `name` to the `CategoryPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `InfoPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `InfoPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryPost" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InfoPost" DROP COLUMN "texto",
DROP COLUMN "titulo",
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
