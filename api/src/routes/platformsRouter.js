const { Router } = require('express')
const getPlatformsHandler = require('../handlers/getPlatformsHandler')

const platformsRouter = Router()

platformsRouter.get('/',getPlatformsHandler)

module.exports = platformsRouter