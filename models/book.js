const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    author : {type: String, required : true },
    title : {type: String, required : true },
    description: {type: String, required : true },
    image : { type: String },
    link: String
})

const Book = mongoose.model ("Book", bookSchema);

module.exports = Book;