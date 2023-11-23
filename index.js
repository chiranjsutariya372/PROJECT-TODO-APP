const express=require('express');
const connect = require('./config/db');
const app = require('./Router/routers');
const cookieparser= require('cookie-parser');
const todoroute = require('./Router/todo_router');
const route=express()

route.set("view engine","ejs")
route.use(express.static(__dirname+"/public"))
route.set("views",__dirname+"/views")
route.use(express.urlencoded({ extended:true }))
route.use(express.json())
route.use(cookieparser())

route.use(app)
route.use(todoroute)

route.listen(8090,()=>{
    console.log("listening on 8090");
    connect()
})

