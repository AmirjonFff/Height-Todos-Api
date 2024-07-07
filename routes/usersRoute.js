const Router = require('express')
const routerUser = new Router()
const controller = require('../controlers/usersController')
const { check } = require("express-validator")
const userMiddleware = require('../middlewarre/userMiddleware')

routerUser.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({ min: 4, max: 10 })
], controller.registration)
routerUser.post('/login', controller.login)
routerUser.get('/users', userMiddleware, controller.getUsers)

module.exports = routerUser