/*
  Warnings:

  - The values [accessories] on the enum `Section` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Section_new" AS ENUM ('food', 'toys', 'article', 'other');
ALTER TABLE "Product" ALTER COLUMN "section" TYPE "Section_new" USING ("section"::text::"Section_new");
ALTER TYPE "Section" RENAME TO "Section_old";
ALTER TYPE "Section_new" RENAME TO "Section";
DROP TYPE "Section_old";
COMMIT;
