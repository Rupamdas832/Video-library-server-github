const express = require("express")
const router = express.Router()

const {getAllVideos, addVideo} = require("./videos.controller.js")

router.route("/").get(getAllVideos)

router.route("/").post(addVideo)


  module.exports = router