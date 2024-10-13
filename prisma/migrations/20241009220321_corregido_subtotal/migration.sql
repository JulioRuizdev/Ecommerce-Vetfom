/*
  Warnings:

  - You are about to drop the column `subTtotal` on the `Order` table. All the data in the column will be lost.
  - Added the required column `subTotal` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "subTtotal",
ADD COLUMN     "subTotal" DOUBLE PRECISION NOT NULL;
