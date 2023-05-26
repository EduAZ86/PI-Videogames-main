const postNewVG = require("../controllers/postNewVG")

const postVGHandler = async (req, res) => {
    try {
        const {
            name,
            description,
            platforms,
            background_image,
            released,
            rating,           
            genreId,
          } = req.body
        const videogame = {
            name,
            description,
            platforms,
            background_image,
            released,
            rating           
        }
        const response = await postNewVG (videogame,genreId)
        res.status(200).json({response})
          
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = postVGHandler