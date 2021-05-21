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


app.listen(3000, () => {
  console.log("SERVER IS running at port 3000")
  })