const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Genre } = require('../db')
const URL = 'https://api.rawg.io/api/genres'

const getAllGenres = async () => {
    const count = await Genre.count()    
    if(count === 0) {
        const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}`)      
        const results = data.results

        const arrayObjGenres = results.map((gen)=>{return {name : gen.name, id: gen.id}})
        
        await Genre.bulkCreate(arrayObjGenres)

        return arrayObjGenres
    }
        const Genres = await Genre.findAll()
        const dBArrayObjGenres = Genres.map((gen)=>{return {name : gen.name, id: gen.id}})     
    return dBArrayObjGenres
}

module.exports = getAllGenres