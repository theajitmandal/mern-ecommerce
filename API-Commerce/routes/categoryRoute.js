import express from "express";
const router = express.Router();
import { createCategory, helloFunction } from "../controllers/categoryController.js";

router.get("/test", helloFunction);
router.post("/createcategory", createCategory)

export default router;