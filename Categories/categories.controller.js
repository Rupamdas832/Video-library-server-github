const {Category} = require("./categories.model.js")

const getAllCategories = async (req,res) => {
  try{
      const categories = await Category.find({})
      if(!categories){
        res.status(400).json({success: false, message: "No categories found. Sorry!"})
      }
      res.status(200).json({success: true, categories: categories})
    }catch(error){
      console.log(error)
      res.status(400).json({success: false, message: "Couldn't retrieve data. Sorry!"})
    }
}

const addCategory = async (req,res) => {
  const {title, img} = req.body;

    try{
      const newCategory = new Category({
        title: title,
        img: img
      })
      const saveCategory = await newCategory.save()
      res.status(201).json({success: true, category: saveCategory})
    }catch(error){
      res.status(401).json({success: false, message: "Couldn't save category. Sorry!"})
    }
}

module.exports = {getAllCategories, addCategory}