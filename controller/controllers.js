const user = require("../model/Schema")
const jwt=require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const home=(req,res)=>{
    res.render('index')
}
const register  = (req,res)=>{
    res.render('singup')
}
const registerpost = async(req, res)=>{
    const {username,email,password}=req.body
    let security =await bcrypt.hash(password,10)
    let data=await user.create({username,email,password:security})
    console.log(data);
    res.cookie("token",username).redirect("/login")
}
const login=(re,res)=>{
    res.render('login')
}
const loginpost = async(req, res)=>{
    const {email,password}=req.body
    let find=await user.findOne({email:email})
    if(!find)
    {return res.send("email and password not match")}

    let pass=await bcrypt.compare(password,find.password)
    if(find.email != email || !pass)
    {return res.send("email and password not match")}

    let token=jwt.sign({id:find.id},"kdshfdiufyerifcdkfh")
    console.log(token);

    res.cookie("token",token).redirect("/blog")
}
const blog=(req,res)=>{
    res.render("blog")
}
const blogpost=async(req,res)=>{
    req.user.blog.push(req.body)
    await user.findByIdAndUpdate(req.user.id,req.user)
    console.log(req.body);
    res.redirect("/blogpage")
}
const blogpage=async(req,res)=>{
    const show=await user.findOne(req.user) 
    res.status(200).json({
        Blog: (show.map((item) => (req) ? item.blog : ''))
    })
}
module.exports={home,register,registerpost,login,loginpost,blog,blogpost,blogpage}