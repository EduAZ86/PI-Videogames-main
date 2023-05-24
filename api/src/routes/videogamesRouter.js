const { Router } = require('express')
const getAllVGHandler = require('../handlers/getAllVGHandler')
const getVGNameHandler = require('../handlers/getVGNameHandler')
const getVGByIdHandler = require('../handlers/getVGByIdHandler')
const postVGHandler = require('../handlers/postVGHandler')

const videogamesRouter = Router()

videogamesRouter.get('/',getAllVGHandler)

videogamesRouter.get('/name',getVGNameHandler)

videogamesRouter.get('/:id',getVGByIdHandler)

videogamesRouter.post('/',postVGHandler)

module.exports = videogamesRouter