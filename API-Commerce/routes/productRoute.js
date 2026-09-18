import express from "express";
const router = express.Router();
import { postProduct, showProduct } from "../controllers/productController.js";

router.post("/postproduct", postProduct)
router.get("/productlist", showProduct)

export default router;