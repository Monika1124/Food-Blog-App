//basically we define our table schema


const mongoose = require('mongoose');

const  recipeSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:Array,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    time:{
        type:String,
        
       
    },
   coverImage:{
        type:String,
        
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User' //refers to the User model
        
    }
},{timestamps:true});

module.exports = mongoose.model('Recipe',recipeSchema); //exporting the model to use it in other files