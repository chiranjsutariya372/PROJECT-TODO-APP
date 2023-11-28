const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    blog:Array
})
const user=mongoose.model('Diwali_project', userSchema)

module.exports=user