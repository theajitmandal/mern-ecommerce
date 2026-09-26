import express from "express";
const router = express.Router();

import { userRegister } from "../controllers/authController.js";

router.post("/register", userRegister)

export default router;