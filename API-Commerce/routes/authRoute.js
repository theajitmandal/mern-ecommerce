import express from "express";
const router = express.Router()

import { forgotPassword, postEmailConfirmation, resetPassword, signout, userInfo, userList, userLogin, userRegister } from "../controllers/authController.js"

router.post("/register", userRegister)
router.post("/confirmation/:token", postEmailConfirmation)
router.post("/login", userLogin)
router.post("/forgetpassword", forgotPassword)
router.post("/resetpassword/:token", resetPassword)
router.post("/signout", signout)
router.get("/userlist", userList)
router.get("/userinfo/:id", userInfo)

export default router