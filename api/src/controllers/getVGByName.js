const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Videogame } = require('../db')
const URL = 'https://api.rawg.io/api/games?search'
const getVGByName = async (name) =>{    
const { data } = await axios.get(`${URL}=${name}&key=${YOUR_API_KEY}`)
const ApiVG = data.results

const dbVG = await Videogame.findOne({
    where: { name: name }
})
let VGbyName = []
if (dbVG) {
    VGbyName = [...dbVG, ApiVG]
} else{
    VGbyName = ApiVG
}

return VGbyName.slice(0, 15)
}
module.exports = getVGByName