/*
  Warnings:

  - You are about to drop the column `location` on the `user` table. All the data in the column will be lost.
  - Added the required column `genero` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobrenome` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `location`,
    ADD COLUMN `genero` VARCHAR(191) NOT NULL,
    ADD COLUMN `sobrenome` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone` VARCHAR(191) NOT NULL;
