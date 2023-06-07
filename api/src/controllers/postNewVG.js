const { Videogame, Genre, Platform } = require('../db')
const postNewVG = async(newVideogame) => {
    
    const {
        name,
        background_image,
        background_image_additional,
        description_raw,
        platforms,
        released,
        rating,
        genres,
        stores,
        developers,
        tags,
        metacritic} = newVideogame

    let newDbVG = await Videogame.create({
        name,
        background_image,
        background_image_additional,
        description_raw,
        platform:platforms,
        released,
        rating,
        stores,
        genre: genres,
        developers,
        tags,
        metacritic})


    for (let genre of genres) {
      let dbGenre = await Genre.findAll({
          where:{
              name: genre.name
          }
      });
      if(dbGenre){
         await newDbVG.addGenre(dbGenre) 
      }else{
          throw Error('Please try with another genre');
      }
      
    }
    for (let plat of platforms) {
      let dbPlatform = await Platform.findAll({
          where:{
              name: plat.name
          }
      });
      if(dbPlatform){
         await newDbVG.addPlatform(dbPlatform) 
      }else{
          throw Error('Please try with another platform');
      }
      
    }

    newDbVG = {...newDbVG.dataValues, genres: newDbVG.dataValues.genre, platforms: newDbVG.dataValues.platform.map(platform => ({ platform }))}
    
    return newDbVG
    
}



module.exports = postNewVG






// const { Videogame, Genre, Platform } = require('../db')
// const postNewVG = async(newVideogame) => {
    
//     const {
//         name,
//         background_image,
//         background_image_additional,
//         description_raw,
//         platforms,
//         released,
//         rating,
//         genres,
//         stores,
//         developers,
//         tags,
//         metacritic} = newVideogame

//     const newDbVG = await Videogame.create({
//         name,
//         background_image,
//         background_image_additional,
//         description_raw,
//         platforms:platforms,
//         released,
//         rating,
//         stores,
//         genres: genres,
//         developers,
//         tags,
//         metacritic})


//     for (let genre of genres) {
//       let dbGenre = await Genre.findAll({
//           where:{
//               name: genre
//           }
//       });
//       if(dbGenre){
//          await newDbVG.addGenre(dbGenre) 
//       }else{
//           throw Error('Please try with another genre');
//       }
      
//     }
//     for (let plat of platforms) {
//       let dbPlatform = await Platform.findAll({
//           where:{
//               name: plat
//           }
//       });
//       if(dbPlatform){
//          await newDbVG.addPlatform(dbPlatform) 
//       }else{
//           throw Error('Please try with another platform');
//       }
      
//     }
    
//     return newDbVG
    
// }









    // let genreDB = await Genre.findAll({
    //     where: {name: videogame.genres.map((gen)=>gen.name)}
    // })
    // newDbVG.addGenre(genreDB)


///////////////////////////////////////////////


    // videogame.genres.forEach(async (genre) => {
    //     let dbGenre = await Genre.findAll({
    //         where:{
    //             name: genre.name
    //         }
    //     });
    //     if(dbGenre){
    //        newDbVG.addGenre(dbGenre) 
    //     }else{
    //         throw Error('Please try with another genre');
    //     }
        
    // })
    // videogame.platforms.forEach(async (platform) => {
    //     let dbPlatform = await Platform.findAll({
    //         where:{
    //             name: platform.name
    //         }
    //     });
    //     if(dbPlatform){
    //        newDbVG.addPlatform(dbPlatform) 
    //     }else{
    //         throw Error('Please try with another platform');
    //     }
        
    // })