const express = require("express")
const router = express.Router()

const { getVideoLibrary, getVideoLibraryByUserId, updateVideoLibrary, deleteVideoFromVideoLibrary, getPlaylist, updatePlaylist, deleteVideoFromPlaylist, checkPlaylistId } = require("./videoLibrary.controller.js")

const {authVerify} = require("../Users/users.controller.js")

router.route("/").get(authVerify, getVideoLibraryByUserId ,getVideoLibrary)

router.route("/").post(authVerify, getVideoLibraryByUserId ,updateVideoLibrary)

router.route("/").delete(authVerify, getVideoLibraryByUserId ,deleteVideoFromVideoLibrary)

router.route("/:playlistId").post(authVerify, getVideoLibraryByUserId ,checkPlaylistId, updatePlaylist)

router.route("/:playlistId").delete(authVerify, getVideoLibraryByUserId,checkPlaylistId, deleteVideoFromPlaylist)

module.exports = router