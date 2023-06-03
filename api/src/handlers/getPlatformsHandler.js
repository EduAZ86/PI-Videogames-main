const getAllPlatforms = require('../controllers/getAllPlatforms') 


const getPlatformsHandler = async (req,res)=>{  
    try {
        const response = await getAllPlatforms()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

module.exports = getPlatformsHandler