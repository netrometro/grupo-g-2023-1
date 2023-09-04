/*
  Warnings:

  - Added the required column `isAdmin` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL;
