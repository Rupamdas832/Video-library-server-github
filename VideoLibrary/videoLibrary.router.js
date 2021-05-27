const express = require("express")
const router = express.Router()

const {getVideoLibrary, checkUserId, updateVideoLibrary, deleteVideoFromVideoLibrary, getPlaylist, updatePlaylist, deleteVideoFromPlaylist, checkPlaylistId } = require("./videoLibrary.controller.js")

router.route("/")
  router.param("userId", checkUserId)
  router.param("playlistId", checkPlaylistId)

router.route("/:userId").get(getVideoLibrary)

router.route("/:userId").post(updateVideoLibrary)

router.route("/:userId").delete(deleteVideoFromVideoLibrary)

router.route("/:userId/:playlistId").post(updatePlaylist)

router.route("/:userId/:playlistId").delete(deleteVideoFromPlaylist)

module.exports = router