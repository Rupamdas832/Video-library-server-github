const mongoose = require("mongoose")

const mySecret = process.env['MongodbCredentials']

const uri = mySecret


const initializeDBconnection = async () => {
  try{
    const response = await mongoose.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
      })
      if(response){
        console.log("MONGOOSE connected successfuly")
      }
  }catch (error){
    console.error("ERROR OCCURRED", error)
  }
}

module.exports = {initializeDBconnection} 