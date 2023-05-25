const getVGByName = require("../controllers/getVGByName")

const getVGNameHandler = async (req, res) => {        
    try {
        const name = req.query.name     
        const VGname = await getVGByName(name)        
        res.status(200).json(VGname)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = getVGNameHandler