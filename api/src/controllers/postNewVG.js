const { Videogame } = require('../db')
const postNewVG = async(newVG) => {

    const newDbVG = await Videogame.create(newVG)
    await newDbVG.addGenre(newVG.genreId)

    if( newDbVG) return true

    throw new Error(false)
}

module.exports = postNewVG
