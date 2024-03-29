const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Videogame } = require('../db')
const URL = 'https://api.rawg.io/api/games'
const uuidRegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const getVGDetailById = async (id) => {
    if (uuidRegExp.test(id)) {
        const FindDBVideoGame = await Videogame.findByPk(id)

        DbVG = {...FindDBVideoGame.dataValues, genres: FindDBVideoGame.dataValues.genre, platforms: FindDBVideoGame.dataValues.platform.map(platform => ({ platform })),  stores: FindDBVideoGame.dataValues.stores.map(store => ({ store }))}
        
    if(DbVG) return DbVG   
    }
    const { data } = await axios.get(`${URL}/${id}?key=${YOUR_API_KEY}`)
    const apivG = data
    if (apivG) return apivG
    
    throw new Error('Video game detail by id not found')
}

module.exports = getVGDetailById