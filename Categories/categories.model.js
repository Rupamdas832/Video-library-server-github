const mongoose = require('mongoose')

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    unique: true
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = { Category }