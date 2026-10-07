import express from "express";
const router = express.Router()

import { forgotPassword, postEmailConfirmation, requireSignin, resetPassword, signout, userInfo, userList, userLogin, userRegister } from "../controllers/authController.js"

router.post("/register", userRegister)
router.post("/confirmation/:token", postEmailConfirmation)
router.post("/login", userLogin)
router.post("/forgetpassword", forgotPassword)
router.post("/resetpassword/:token", resetPassword)
router.post("/signout", signout)
router.get("/userlist",requireSignin, userList)
router.get("/userinfo/:id",requireSignin, userInfo)

export default router