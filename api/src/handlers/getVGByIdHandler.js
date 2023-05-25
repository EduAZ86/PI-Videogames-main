const getVGDetailById = require("../controllers/getVGDetailByID")

const getVGByIdHandler = async(req,res)=>{
try {
    const { id } = req.params
    const response = await getVGDetailById(id)
    res.status(200).json(response)
    
} catch (error) {
    res.status(400).json({error: error.message})
}

}

module.exports = getVGByIdHandler