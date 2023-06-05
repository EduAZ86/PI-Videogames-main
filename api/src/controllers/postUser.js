const { User } = require('../db')
const postUser = async (email ,password) => {
    // if(!email || !password) throw new Error('incomplete, missing data')
    const newUser = await User.create({email:email, password:password})
    if(newUser) return true
    
    throw new Error(false)}

module.exports = postUser

