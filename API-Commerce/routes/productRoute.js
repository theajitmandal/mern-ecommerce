import express from "express";
const router = express.Router();
import { postProduct } from "../controllers/productController.js";

router.post("/postproduct", postProduct)

export default router;