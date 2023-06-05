const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogamesRouter')
const genresRouter = require('./genresRouter')
const platformsRouter = require('./platformsRouter')
const usersRouter = require('./usersRouter')
const favRouter = require('./favRouter')

const router = Router();

router.use('/videogames', videogamesRouter)

router.use('/genres', genresRouter)

router.use('/platforms', platformsRouter)

router.use('/users', usersRouter)

router.use('/fav',favRouter)

module.exports = router;
