const mongoose = require("mongoose")
const { Schema } = mongoose

const videoSchema = new Schema({
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  categoryId: {
    type: String,
    required: true
  },
  channelName: {
    type: String,
    required: true
  }
})

const Video = mongoose.model("Video", videoSchema)
module.exports = { Video }