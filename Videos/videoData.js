const express = require("express")
const router = express.Router()

const {Video} = require("./videoModel")

router.route("/")
  .get(async(req,res) => {
    try{
      const videos = await Video.find({})
      if(!videos){
        res.status(400).json({success: false, message: "No videos found. Sorry!"})
      }
      res.status(200).json({success: true, videos: videos})
    }catch(error){
      console.log(error)
      res.status(400).json({success: false, message: "Couldn't retrieve data. Sorry!"})
    }
  })
  .post(async(req,res) => {
    const {videoId, title, channelName, categoryId, thumbnail} = req.body;

    try{
      const newVideo = new Video({
        videoId: videoId,
        title: title,
        thumbnail: thumbnail,
        categoryId: categoryId,
        channelName: channelName,
      })
      const saveVideo = await newVideo.save()
      res.status(201).json({success: true, video: saveVideo})
    }catch(error){
      res.status(401).json({success: false, message: "Couldn't save video. Sorry!"})
    }
  })

  module.exports = router