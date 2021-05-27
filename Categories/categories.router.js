const express = require("express")
const router = express.Router()

const {getAllCategories, addCategory} = require("./categories.controller.js")

router.route("/").get(getAllCategories)

router.route("/").post(addCategory)


module.exports = router