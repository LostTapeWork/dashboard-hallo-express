/*
  Warnings:

  - You are about to drop the column `address` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `licenseNumber` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `nationalId` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `operationalArea` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `placeOfBirth` on the `driver` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `driver` DROP COLUMN `address`,
    DROP COLUMN `dateOfBirth`,
    DROP COLUMN `fullName`,
    DROP COLUMN `licenseNumber`,
    DROP COLUMN `nationalId`,
    DROP COLUMN `operationalArea`,
    DROP COLUMN `phone`,
    DROP COLUMN `placeOfBirth`;

-- CreateTable
CREATE TABLE `DriverProfile` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `operationalArea` VARCHAR(191) NOT NULL,
    `licenseNumber` VARCHAR(191) NOT NULL,
    `nationalId` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `placeOfBirth` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `driverId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DriverProfile_driverId_key`(`driverId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DriverProfile` ADD CONSTRAINT `DriverProfile_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
