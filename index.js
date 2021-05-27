const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

 
const {initializeDBconnection} = require("./Database/DBconnect")
initializeDBconnection()

app.get("/", (req,res) => {
  res.json({success: true, mesg: "Ya its working"})
})

const userRouter = require("./Users/users.router.js")
app.use("/", userRouter)

const videosRouter = require("./Videos/videos.router.js")
app.use("/videos",videosRouter)

const videoLibraryRouter = require("./VideoLibrary/videoLibrary.router.js")
app.use("/video-library",videoLibraryRouter)

const categoriesRouter = require("./Categories/categories.router.js")
app.use("/categories", categoriesRouter)


app.listen(3000, () => {
  console.log("SERVER IS running at port 3000")
  })