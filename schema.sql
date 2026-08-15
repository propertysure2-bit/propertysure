-- MySQL Database Schema for PropertySure

CREATE DATABASE IF NOT EXISTS `propertysure` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `propertysure`;

-- Table 1: Contact & Consultation Form Submissions
CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `city` VARCHAR(100) DEFAULT 'Noida',
  `service` VARCHAR(100) DEFAULT 'Home Loan',
  `loan_amount` VARCHAR(100) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table 2: Sell Property Form Submissions
CREATE TABLE IF NOT EXISTS `sell_property_submissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `mobile` VARCHAR(20) NOT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `city` VARCHAR(100) DEFAULT 'Noida',
  `property_type` VARCHAR(100) DEFAULT 'Apartment',
  `property_value` VARCHAR(100) DEFAULT NULL,
  `images` TEXT DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
