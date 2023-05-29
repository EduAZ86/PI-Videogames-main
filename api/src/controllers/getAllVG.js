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

/////////////////////////////SI FUNCIONA ////////////////////////////
    
// let allResults = []

// const responses = await Promise.all([
//     axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=1`),
//     axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=2`),
//     axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=3`),
//     axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=4`),
//     axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=5`),
// ]);

// responses.forEach((response)=> {
//     allResults = allResults.concat(response.data.results)
// })
////////////////////////////////////////////////////////////////////////////////////////



    // let i = 1
    // const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40&page=${i}`)
    // let result1 = data.results
    

    // const { data } = await axios.get(`${URL}?key=${YOUR_API_KEY}&page_size=40`)
    // const results = data.results
///////////////////////////////////////////////////////////

    // const infoApi = async () => {
    //     let allResults = []; // arreglo temporal para almacenar los resultados de cada solicitud de API
    //     for (let i = 1; i <= 5; i++) { // realizamos 5 solicitudes, cada una con un parámetro "page" diferente
    //       const response = await axios.get(`https://api.rawg.io/api/games?key=8832286909b344fea6fba9e9f2ba9e0d&page=${i}`
    //       );
    //       allResults = allResults.concat(response.data.results); // concatenamos los resultados de cada solicitud al arreglo temporal
    //     }
    //     return allResults; // devolvemos todos los resultados concatenados
    //   };

////////////////////////////////////////////////////////////

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