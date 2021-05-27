const mongoose = require("mongoose")
const {Schema} = mongoose

const videoLibrarySchema = new Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  likedVideos: [{_id:{ type: mongoose.Schema.Types.ObjectId, ref:"Video"}}],
  watchLaterVideos: [{_id:{ type: mongoose.Schema.Types.ObjectId, ref:"Video"}}],
  historyVideos: [{_id:{ type: mongoose.Schema.Types.ObjectId, ref:"Video"}}],
  playlist: [{
    title: {type: String},
    videos: [{_id:{ type: mongoose.Schema.Types.ObjectId, ref:"Video"}}]
  }]
})

const VideoLibrary = mongoose.model('VideoLibrary', videoLibrarySchema)

module.exports = {VideoLibrary}