const express = require("express")
const router = express.Router()

const {User} = require("./userModel.js")

router.route("/")
  .post(async (req,res) => {
    const {name, email, password} = req.body;
    
    try{
          const newUser = new User({name: name, email: email, password: password})
          const saveUser = await newUser.save()
          res.status(201).json({success: true, user: saveUser})
        
    }catch(error){
      res.status(500).json({success: false, message: "Sorry! couldn't signup. Retry...", error})
    }
  })
  

  module.exports = router