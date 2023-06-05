const { Router } = require('express')
const postUserHandler = require('../handlers/postUserHandler')
const getAllUsersHandler = require('../handlers/getAllUsersHandler')

const usersRouter = Router()

usersRouter.post('/', postUserHandler)

usersRouter.get('/', getAllUsersHandler)

module.exports = usersRouter