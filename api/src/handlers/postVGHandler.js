const postNewVG = require("../controllers/postNewVG")

const postVGHandler = async (req, res) => {
    try {
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
            metacritic
        } = req.body
        const videogame = {
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
            metacritic          
        }
        const response = await postNewVG (videogame)
        res.status(200).json({response})
          
    } catch (error) {
        res.status(405).json({error: error.message})
    }
}

module.exports = postVGHandler