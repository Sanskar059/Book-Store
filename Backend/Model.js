const mongoose = require('mongoose');
 const bookschema = mongoose.Schema({
    name: String,
    title : String,
    price : Number,
    Catogry: String,
    img: String,
 })

 const Book = mongoose.model("book" , bookschema);
module.exports =  Book;