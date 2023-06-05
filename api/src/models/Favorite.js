const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER, 
         autoIncrement: true,
         allowNull: false, 
         primaryKey: true
      },
      gameID: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { timestamps: false });
};