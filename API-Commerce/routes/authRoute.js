import express from "express";
const router = express.Router();

import { postEmailConfirmation, userRegister } from "../controllers/authController.js";

router.post("/register", userRegister)
router.post("/confirmation/:token", postEmailConfirmation)

export default router;