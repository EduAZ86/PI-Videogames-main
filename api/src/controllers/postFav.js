const { Favorite } = require('../db')

const postFav = async (gameID) => {
    await Favorite.findOrCreate({
        where: {
            gameID: gameID
        }
    })
    const allFavorites = await Favorite.findAll()
    return allFavorites

}

module.exports = postFav