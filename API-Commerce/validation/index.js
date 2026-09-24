import { body } from "express-validator";

export const productValidator = [
  body("productName")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 3 })
    .withMessage("Product name must be at least 3 characters"),

  body("productPrice")
    .notEmpty()
    .withMessage("Product price is required")
    .isFloat({ min: 0 })
    .withMessage("Product price must be a positive number"),

  body("countInStock")
    .notEmpty()
    .withMessage("Stock quantity is required")
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),

  body("productDescription")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 10 })
    .withMessage("Product description must be at least 10 characters"),

  body("productRating")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Product rating must be between 0 and 5"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isMongoId()
    .withMessage("Invalid category ID")
];