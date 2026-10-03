import express from "express";
const router = express.Router()

import { forgotPassword, postEmailConfirmation, resetPassword, userLogin, userRegister } from "../controllers/authController.js"

router.post("/register", userRegister)
router.post("/confirmation/:token", postEmailConfirmation)
router.post("/login", userLogin)
router.post("/forgetpassword", forgotPassword)
router.post("/resetpassword/:token", resetPassword)

export default router