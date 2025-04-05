
const Book = require("../Model");


 const getbook =async (req , res)=>{
  try {

    const book = await Book.find()
    res.status(200).json(book)
  } catch (error) {
    console.log("Error in book fetching")
  }

}

module.exports = getbook