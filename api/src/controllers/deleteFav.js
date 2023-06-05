const { Favorite } = require('../db')

const deleteFav = async (gameID) => {
    await Favorite.destroy({ where: gameID })

    const allFavorites = await Favorite.findAll()

    return allFavorites
}

module.exports = deleteFav