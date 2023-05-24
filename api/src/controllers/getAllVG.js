const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Videogame } = require('../db')
const URL = 'https://api.rawg.io/api/games'
const getAllVG = async () => {
    const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}`)
    const results = data.results

    const ApiVideoGames = results.map((game)=>{
        const objVG = {
            id: game.id,
            name : game.name,
            released: game.released,
            image : game.background_image,
            rating: game.rating
        }
        return objVG
    })
    const DBVideoGames = await Videogame.findAll()

    return ApiVideoGames.concat(DBVideoGames)
}
module.exports = getAllVG