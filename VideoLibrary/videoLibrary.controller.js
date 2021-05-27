const {VideoLibrary} = require("./videoLibrary.model.js")
const {User} = require("../Users/users.model")

const secretKey = process.env['TokenSecretKey']

const checkUserId = async (req,res,next, userId) => {
  try{
      const findUser = await User.findById(userId)
      
      if(!findUser){
        return res.status(401).json({success: false, message: "User couldn't be found. Try again"})
      }
      let videoLibrary = await VideoLibrary.findOne({ userId });

    if (!videoLibrary) {
      videoLibrary = new VideoLibrary({ 
        userId, 
        likedVideos: [],
        watchLaterVideos: [],
        historyVideos: [],
        playlist: []
         });
      videoLibrary = await videoLibrary.save();
    }
    req.videoLibrary = videoLibrary;
      next();
    }catch(error){
      console.log(error)
      res.status(400).json({success: false, message: "Unable to retrive user's video library"})
    }
}

const checkPlaylistId = async (req,res,next, playlistId) => {
  try{
      let {videoLibrary} = req
      
      const foundPlaylist = videoLibrary.playlist.find(item => item._id == playlistId)
      
      if(!foundPlaylist){
        return res.status(401).json({success: false, message: "Playlist couldn't be found. Try again"})
      }

      req.playlist = foundPlaylist;
      next();
    }catch(error){
      console.log(error)
      res.status(400).json({success: false, message: "Unable to retrive user's playlist"})
    }
}

const getVideoLibrary = async (req,res) => {
  const {videoLibrary} = req
    try{
      res.status(200).json({ success: true, videoLibrary });
    }catch(error){
      console.log(error)
      res.status(500).json({success: false,message: "Unable to retrive the likedVideo"})
    }
}

const updateVideoLibrary = async (req,res) => {
  let {videoLibrary} = req;
    const {_id, section, title} = req.body

    if(section === "likedVideos"){
      try{
        videoLibrary.likedVideos.push({_id})
        videoLibrary = await videoLibrary.save()
        res.status(201).json({success: true, videoLibrary})
      }catch(error){
        console.log(error)
          res.status(400).json({success:false, message: "Couldn't be updated. Sorry!", error})
        }
    }else if(section === "watchLaterVideos"){
      try{
        videoLibrary.watchLaterVideos.push({_id})
        videoLibrary = await videoLibrary.save()
        res.status(201).json({success: true, videoLibrary})
      }catch(error){
          res.status(400).json({success:false, message: "Couldn't be updated. Sorry!", error})
        }
    }else if(section === "historyVideos"){
      try{
        videoLibrary.historyVideos.push({_id})
        videoLibrary = await videoLibrary.save()
        res.status(201).json({success: true, videoLibrary})
      }catch(error){
          res.status(400).json({success:false, message: "Couldn't be updated. Sorry!", error})
      }
    }else if(section === "playlistVideos"){
      try{
        const newPlaylist = {
            title: title,
            videos: [{_id}]
          }
          videoLibrary.playlist.push(newPlaylist)
          videoLibrary = await videoLibrary.save()
          res.status(201).json({success: true, playlist: videoLibrary.playlist})
      }catch(error){
          res.status(400).json({success:false, message: "Couldn't be updated. Sorry!", error})
      }
    }
    else{
      res.status(500).json({success:false, message: "Invalid section provided"})
    }
}

const deleteVideoFromVideoLibrary = async (req,res) => {
  let {videoLibrary} = req;
    const {_id, section} = req.body

    if(section === "likedVideos"){
      try{
         videoLibrary.likedVideos = videoLibrary.likedVideos.filter(item => item._id != _id)

          videoLibrary = await videoLibrary.save()
          res.status(202).json({success: true, videoLibrary})
      }catch(error){
        res.status(400).json({success: false, message: "Couldn't remove video", error})
      }
    }else if(section === "watchLaterVideos"){
      try{
         videoLibrary.watchLaterVideos = videoLibrary.watchLaterVideos.filter(item => item._id != _id)

          videoLibrary = await videoLibrary.save()
          res.status(202).json({success: true, videoLibrary})
      }catch(error){
        res.status(400).json({success: false, message: "Couldn't remove video", error})
      }
      }else if(section === "historyVideos"){
      try{
         videoLibrary.historyVideos = videoLibrary.historyVideos.filter(item => item._id != _id)

          videoLibrary = await videoLibrary.save()
          res.status(202).json({success: true, videoLibrary})
      }catch(error){
        res.status(400).json({success: false, message: "Couldn't remove video", error})
      }
      }else{
        res.status(500).json({success:false, message: "Invalid section provided"})
      }
}

const getPlaylist = async (req,res) => {
  const {playlist} = req
        
        try{
          res.status(200).json({ success: true, playlist });
        }catch(error){
          console.log(error)
          res.status(500).json({success: false,message: "Unable to retrive the Playlist"})
        }
}

const updatePlaylist = async (req,res) => {
let {playlist} = req
        let {videoLibrary} = req
        
        const {_id} = req.body
        try{
          playlist.videos.push({_id})
          videoLibrary = await videoLibrary.save()
          res.status(201).json({success: true, playlist: videoLibrary.playlist})
        }catch(error){
          res.status(400).json({success:false, message: "Couldn't be updated. Sorry!", error})
        }
}

const deleteVideoFromPlaylist = async(req, res) => {
  let {playlist} = req;
        let {videoLibrary} = req
        const {_id} = req.body

        try{
          playlist.videos = playlist.videos.filter(item => item._id != _id)

            videoLibrary = await videoLibrary.save()
            res.status(202).json({success: true, playlist: videoLibrary.playlist})
        }catch(error){
          res.status(400).json({success: false, message: "Couldn't remove video", error})
      }
}

module.exports = {getVideoLibrary, checkUserId, updateVideoLibrary, deleteVideoFromVideoLibrary, checkPlaylistId ,getPlaylist, updatePlaylist, deleteVideoFromPlaylist}