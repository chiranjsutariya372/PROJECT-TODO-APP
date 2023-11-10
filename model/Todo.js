const mongoose = require('mongoose')
const todoSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
})
const todo=mongoose.model('Diwali_todo',todoSchema)