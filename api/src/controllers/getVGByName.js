const { Op } = require('sequelize');
const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Videogame , Genre } = require('../db')
const URL = 'https://api.rawg.io/api/games?search'
const getVGByName = async (name) =>{    
const { data } = await axios.get(`${URL}=${name}&key=${YOUR_API_KEY}`)
const ApiVG = data.results

const dbVG = await Videogame.findAll({
    where:{
        name: {
            [Op.iLike]: `%${name}%`
        }    
    },
    include: {
        model: Genre,
        attributes: ["name"],
        through: {
            attributes: []
        } 
    }    
});

const DBVideoGames = dbVG.map((videoG) => {
    return {...videoG.dataValues, genres: videoG.dataValues.genre, platforms: videoG.dataValues.platform.map(platform => ({ platform }))}
})


let VGbyName = []
if (DBVideoGames.length) {
    VGbyName = DBVideoGames.concat(ApiVG)
} else{
    VGbyName = ApiVG
}

return VGbyName.slice(0, 15)
}
module.exports = getVGByName