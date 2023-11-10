const user = require("../model/Schema")
const bcrypt = require('bcryptjs')
const home=(req,res)=>{
    res.render('index')
}
const register  = (req,res)=>{
    res.render('singup')
}
const registerpost = async(req, res)=>{
    const {username,email,password} = req.body
    // const security= await bcrypt.hash(password,10)
    let data=await user.create({username,email,password})
    console.log(data);
    // res.cookie('token',username)
    res.redirect('/home')
}
const login=(re,res)=>{
    res.render('login')
}
const loginpost = async(req, res)=>{
    const {email,username}=req.body

}
module.exports={home,register,registerpost,login,loginpost}