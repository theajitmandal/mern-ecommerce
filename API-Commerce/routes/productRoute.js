import express from "express";
const router = express.Router();
import { deleteProduct, postProduct, productDetails, showProduct, updateProduct } from "../controllers/productController.js";

router.post("/postproduct", postProduct)
router.get("/productlist", showProduct)
router.get("/productdetails/:id", productDetails)
router.put("/updateproduct/:id", updateProduct)
router.delete("/deleteproduct/:id", deleteProduct)

export default router;