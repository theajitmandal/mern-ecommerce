import express from "express";
const router = express.Router();
import { postProduct, productDetails, showProduct, updateProduct } from "../controllers/productController.js";

router.post("/postproduct", postProduct)
router.get("/productlist", showProduct)
router.get("/productdetails/:id", productDetails)
router.put("/updateproduct/:id", updateProduct)

export default router;