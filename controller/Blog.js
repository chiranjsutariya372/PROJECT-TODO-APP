const product = require("../model/Blog");

const blog=(req,res)=>{
    res.render("blog",{user:req.user})
}
const blogpost=async(req,res)=>{
    console.log(req.user.id);
    // req.body.userId=req.user.id
    let data=await product.create(req.body);
    console.log(data);
    res.send("added blog post");
}
const blogpage=async(req,res)=>{
    let blog=await product.find().populate("userId")
    res.send(blog);
}

module.exports={blog,blogpost,blogpage}