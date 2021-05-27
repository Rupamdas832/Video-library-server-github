const express = require("express")
const router = express.Router()

const { loginUserWithCredentials, signupUserWithEmailAndPassword,userAuthentication, authVerify } = require("./users.controller.js")

router.route("/signup").post(signupUserWithEmailAndPassword)

router.route("/login").post(loginUserWithCredentials)

router.route("/user").get(authVerify, userAuthentication)

module.exports = router;