const { Router } = require("express");
const { getTodos, addTodos, editTodos, deleteTodos, compTodos, searchTodos } = require("../controlers/todosController");
const userMiddleware = require("../middlewarre/userMiddleware");

const routerTodo = Router()

routerTodo.get('/', getTodos)
routerTodo.get('/search', searchTodos)
routerTodo.post('/add', addTodos)
routerTodo.put('/edit', editTodos)
routerTodo.post('/delete', deleteTodos)
routerTodo.put('/complate', compTodos)

module.exports = routerTodo