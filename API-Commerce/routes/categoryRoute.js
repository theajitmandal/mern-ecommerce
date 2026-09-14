import express from "express";
const router = express.Router();
import { createCategory, helloFunction, showCategory } from "../controllers/categoryController.js";

router.get("/test", helloFunction);
router.post("/createcategory", createCategory)
router.get("/categorylist", showCategory)

export default router;