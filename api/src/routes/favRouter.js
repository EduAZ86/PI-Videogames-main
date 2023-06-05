const { Router } = require('express') 
const postFavHandler = require('../handlers/postFavHandler')
const deleteFavHandler = require('../handlers/deleteFavHandler')
const usersRouter = require('./usersRouter')

const favRouter = Router()

favRouter.post('/', postFavHandler)

favRouter.delete('/:id',deleteFavHandler)

module.exports = usersRouter