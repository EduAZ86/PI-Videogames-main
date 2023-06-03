const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('platform', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image_background: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{timestamps : false})
}