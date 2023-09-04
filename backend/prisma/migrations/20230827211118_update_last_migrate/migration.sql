/*
  Warnings:

  - You are about to drop the column `name` on the `CategoryPost` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `InfoPost` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `InfoPost` table. All the data in the column will be lost.
  - Added the required column `nome` to the `CategoryPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `texto` to the `InfoPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `InfoPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryPost" DROP COLUMN "name",
ADD COLUMN     "nome" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InfoPost" DROP COLUMN "text",
DROP COLUMN "title",
ADD COLUMN     "texto" TEXT NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;
