/*
  Warnings:

  - You are about to drop the column `email` on the `driver` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Driver_email_key` ON `driver`;

-- AlterTable
ALTER TABLE `driver` DROP COLUMN `email`;
