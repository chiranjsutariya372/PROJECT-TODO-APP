const todo = require("../model/Todo");

const todoget=(req,res)=>{
    res.render("todo")
}

const todopost=async(req,res)=>{
    let {title,content}=req.body
    req.body.userId=req.find.id
    let create=await todo.create({title,content,isCompleted:true,userId:req.find._id})
    res.send(create)
}

module.exports={todoget,todopost}
