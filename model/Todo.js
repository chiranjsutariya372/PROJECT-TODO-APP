const mongoose = require('mongoose')
const todoSchema=mongoose.Schema({
    title:{type:String,require:true},
    content:{type:String,require:true},
    isCompleted:{type:Boolean,default:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
    
})
const todo=mongoose.model('Diwali_todo',todoSchema)

module.exports=todo