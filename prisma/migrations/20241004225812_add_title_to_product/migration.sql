/*
  Warnings:

  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "type" "Types" NOT NULL;
