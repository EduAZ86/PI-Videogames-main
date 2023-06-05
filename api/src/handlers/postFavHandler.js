const postFav = require('../controllers/postFav')

const postFavHandler = async (req, res) => {
    try {
      const { gameID } = req.body
      const response = postFav(gameID)
      res.status(200).json({response})

    } catch (error) {
       res.status(400).json({error: error.message})
    }

}

module.exports = postFavHandler