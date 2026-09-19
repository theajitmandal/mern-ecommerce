import express from "express";
const router = express.Router();
import { postProduct, productDetails, showProduct } from "../controllers/productController.js";

router.post("/postproduct", postProduct)
router.get("/productlist", showProduct)
router.get("/productdetails/:id", productDetails)

export default router;