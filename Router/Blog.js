const {Router}=require('express')
const { blog, blogpost, blogpage } = require('../controller/Blog')
const blogs=Router()

blogs.get('/blog',blog)
blogs.post('/blog',blogpost)
blogs.get('/blogpage',blogpage)

module.exports=blogs