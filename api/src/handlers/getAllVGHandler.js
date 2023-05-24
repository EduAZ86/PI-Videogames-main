const getAllVG = require('../controllers/getAllVG')
const getAllVGHandler = async (req, res) => {
    try {
        const response = await getAllVG()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

module.exports = getAllVGHandler