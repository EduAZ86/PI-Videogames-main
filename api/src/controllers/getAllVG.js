const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Videogame } = require('../db')
const URL = 'https://api.rawg.io/api/games'

const N_PAGES = 20

const getAllVG = async () => {
    
    let allResults = []
    let responses = []

    for (let i = 1; i < N_PAGES; i++) {
        responses = await Promise.all([
            ...responses, axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=${i}`)
        ]);        
    }

    responses.forEach((response)=> {
        allResults = allResults.concat(response.data.results)
    })

    const ApiVideoGames = allResults?.map((game)=>{
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