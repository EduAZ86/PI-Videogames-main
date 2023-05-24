const axios = require('axios')
const { YOUR_API_KEY } = process.env
require('dotenv').config()
const { Genre } = require('../db')
const URL = 'https://api.rawg.io/api/genres'

const getAllGenres = async () => {
    const count = await Genre.count()    
    if(count === 0) {
        const { data } = await axios.get('https://api.rawg.io/api/genres?key=f40dc6df291245ce8c1dd6e821ebd5f8')
        
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

// const getAllGenres = async () => {
//     const count = await Genre.count()    
//     if(count === 0) {
//         const { results } = await axios.get('https://api.rawg.io/api/genres?key=f40dc6df291245ce8c1dd6e821ebd5f8')
        
//         const arrayObjGenres = results.map((gen)=>{return {name : gen.name}})
        
//         await Genre.bullCreate(arrayObjGenres)

//         return arrayObjGenres
//     }
//         const Genres = await Genre.findAll()
//         const dBArrayObjGenres = Genres.map((gen)=>{return {name : gen.name}})

//     return dBArrayObjGenres
// }