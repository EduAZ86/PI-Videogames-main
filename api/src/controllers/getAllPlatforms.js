const axios = require('axios')
require('dotenv').config()
const { YOUR_API_KEY } = process.env
const { Platform } = require('../db')
const URL = 'https://api.rawg.io/api/platforms'

const getAllPlatforms = async () => {

    const Platforms = await Platform.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
    })
    const dBArrayObjPlatforms = Platforms.map((plat)=>{return {name : plat.name, id: plat.id, image_background: plat.image_background}}) 

    if (!Platforms.length) {
        const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}`)      
        const results = data.results
        const arrayObjPlatforms = results.map((plat)=>{return {name : plat.name, id: plat.id, image_background: plat.image_background}})
           
        return arrayObjPlatforms          
        
    } else return dBArrayObjPlatforms

}

module.exports = getAllPlatforms






// const getAllPlatforms = async () => {
//     const count = await Platform.count()    
//     if(count === 0) {
//         const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}`)      
//         const results = data.results

//         const arrayObjPlatforms = results.map((plat)=>{return {name : plat.name, id: plat.id, image_background: plat.image_background}})
        
//         await Platform.bulkCreate(arrayObjPlatforms)

//         return arrayObjPlatforms
//     }
//         const Platforms = await Platform.findAll()
//         const dBArrayObjPlatforms = Platforms.map((plat)=>{return {name : plat.name, id: plat.id, image_background: plat.image_background}})     
//     return dBArrayObjPlatforms
// }