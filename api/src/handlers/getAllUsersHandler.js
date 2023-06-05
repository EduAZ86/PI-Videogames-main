const getAllUsers = require ('../controllers/getAllUsers')

const getAllUsersHandler = async (req, res) => {
    try {
        const response = await getAllUsers()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

module.exports = getAllUsersHandler