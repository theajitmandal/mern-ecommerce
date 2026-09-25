import { body, validationResult } from "express-validator";

export const productValidator = [

  // Product Name
  body("productName")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 3 })
    .withMessage("Product name must be at least 3 characters"),

  // Product Price
  body("productPrice")
    .notEmpty()
    .withMessage("Product price is required")
    .isFloat({ min: 0 })
    .withMessage("Product price must be 0 or greater"),

  // Stock
  body("countInStock")
    .notEmpty()
    .withMessage("Stock quantity is required")
    .isInt({ min: 0 })
    .withMessage("Stock quantity must be 0 or greater"),

  // Product Description
  body("productDescription")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 10 })
    .withMessage("Product description must be at least 10 characters"),

  // Product Rating
  body("productRating")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Product rating must be between 0 and 5"),

  // Category
  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isMongoId()
    .withMessage("Invalid category ID"),

  // Return validation errors
  (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    next();
  }
];