const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogamesRouter')
const genresRouter = require('./genresRouter')

const router = Router();

router.use('/videogames', videogamesRouter)

router.use('/genres', genresRouter)

module.exports = router;
