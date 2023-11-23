const {Router}=require('express')
const { todoget, todopost } = require('../controller/todo_controllers')
const todoroute=Router()

todoroute.get('/todo',todoget)
todoroute.post('/todo',todopost)

module.exports=todoroute