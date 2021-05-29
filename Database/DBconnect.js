const mongoose = require("mongoose")

const uri = process.env['MongodbCredentials']

const initializeDBconnection = async () => {
  try {
    const response = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    if (mongoose.connection.readyState === 1) {
      console.log("MONGOOSE connected successfuly")
    }
  } catch (error) {
    console.error("ERROR OCCURRED", error)
  }
}

module.exports = { initializeDBconnection } 