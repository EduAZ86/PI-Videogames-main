const postUser = require('../controllers/postUser')

const postUserHandler = async (req, res) => {
    try {
        const { email, password } = req.body
        
        const response = postUser(email, password)

        res.status(200).json({response})
        
    } catch (error) {
        res.status(400).json({error: error.message})     
    }

}

module.exports = postUserHandler