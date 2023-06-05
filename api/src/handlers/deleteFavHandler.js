const deleteFav = require('../controllers/deleteFav')

const deleteFavHandler = async (req, res) => {
    try {
        const  { id } = req.params
        const response = await deleteFav( id)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = deleteFavHandler