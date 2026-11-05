// const express = require('express')
// const authRouter = express.Router()
// OR
const { Router } = require('express')
const authRouter = Router()
const authController = require('../controllers/authcontroller')
const authMiddleware = require('../middlewares/authmiddleware')


authRouter.post("/register", authController.registerUserController)
authRouter.post("/login", authController.loginUserController)
authRouter.get("/logout", authController.logoutUserController)
authRouter.get("/get-me", authMiddleware)

module.exports = authRouter