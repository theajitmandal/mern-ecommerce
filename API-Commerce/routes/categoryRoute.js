import express from "express";
const router = express.Router();
import { categoryDetails, createCategory, helloFunction, showCategory, updateCategory } from "../controllers/categoryController.js";

router.get("/test", helloFunction);
router.post("/createcategory", createCategory)
router.get("/categorylist", showCategory)
router.get("/categorydetails/:id", categoryDetails)
router.put("/updatecategory/:id", updateCategory)

export default router;