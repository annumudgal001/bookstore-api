const mongoose = require('mongoose');




const bookschema=mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book title is required'],
        trim: true,
        maxlength:[ 100 ,'title cant be more than 100 characters']// Corrected from maxlenght to maxlength
    },

    author: {
        type: String,
        required: [true, 'author title is required'],
        trim: true,
        maxlength:[ 100 ,'author title cant be more than 100 characters']// Corrected from maxlenght to maxlength
    },
    year:{
        type: Number,
        required: [true, 'Year of publication is required'],
        min:[1900, 'Year of publication should be after 1900'],
        max:[new Date().getFullYear(), 'Year of publication should be before current year'] // Corrected from max to new Date().getFullYear()
    },
    createdat:{
        type: Date,
        default: Date.now
    }
     
})

module.exports=mongoose.model('book',bookschema);