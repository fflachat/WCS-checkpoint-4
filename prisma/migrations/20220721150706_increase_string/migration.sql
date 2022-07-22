-- AlterTable
ALTER TABLE `Article` MODIFY `summary` TEXT NOT NULL,
    MODIFY `content` MEDIUMTEXT NULL;

-- AlterTable
ALTER TABLE `Video` MODIFY `summary` TEXT NOT NULL;
