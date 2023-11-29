const mongoose = require('mongoose');

let userproduct=mongoose.Schema({
    title:String,
    img:String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}
})

let product=mongoose.model('Blog_Diwali',userproduct)

module.exports=product