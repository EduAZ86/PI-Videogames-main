const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Genre } = require('../db')
const URL = 'https://api.rawg.io/api/genres'

const getAllGenres = async () => {

    const Genres = await Genre.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
    })
    const dBArrayObjGenres = Genres.map((gen)=>{return {name : gen.name, id: gen.id, image_background: gen.image_background}})     

    if (!Genres.length) {
        const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}`)      
        const results = data.results
        const arrayObjGenres = results.map((gen)=>{return {name : gen.name, id: gen.id, image_background: gen.image_background}})
           
        return arrayObjGenres            
        
    } else return dBArrayObjGenres
}

module.exports = getAllGenres











// await Genre.bulkCreate(arrayObjGenres)   

// const getAllGenres = async () => {
    
//     const count = await Genre.count()    
//     if(count === 0) {
//         const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}`)      
//         const results = data.results

//         const arrayObjGenres = results.map((gen)=>{return {name : gen.name, id: gen.id, image_background: gen.image_background}})
        
//         await Genre.bulkCreate(arrayObjGenres)

//         return arrayObjGenres
//     }
//         const Genres = await Genre.findAll()
//         const dBArrayObjGenres = Genres.map((gen)=>{return {name : gen.name, id: gen.id, image_background: gen.image_background}})     
//     return dBArrayObjGenres
// }


