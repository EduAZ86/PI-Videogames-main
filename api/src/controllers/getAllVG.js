const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Videogame, Genre, Platform } = require('../db')
const URL = 'https://api.rawg.io/api/games'

const N_PAGES = 3

const getAllVG = async () => {
    
    let allResults = []
    let responses = []

    for (let i = 1; i < N_PAGES; i++) {
        responses = await Promise.all([...responses, axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=${i}`)
        ]);        
    }

    responses.forEach((response)=> {        
        allResults = allResults.concat(response.data.results)
    })

    const ApiVideoGames = allResults
   
    const results = await Videogame.findAll({ 
        
        include:{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            },
            model: Platform,
            attributes: ['name'],
            through: {
                attributes: []
            }     
        }    
    })

    const DBVideoGames = results.map((videoG) => {
        return {...videoG.dataValues, genres: videoG.dataValues.genre, platforms: videoG.dataValues.platform.map(platform => ({ platform }))}
    })

    return ApiVideoGames.concat(DBVideoGames)
}
module.exports = getAllVG