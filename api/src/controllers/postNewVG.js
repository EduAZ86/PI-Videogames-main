const { Videogame } = require('../db')
const postNewVG = async(videogame,genreId) => {

    const newDbVG = await Videogame.create(videogame)
    await newDbVG.addGenre(genreId)

    if( newDbVG) return true

    throw new Error(false)
}

module.exports = postNewVG
