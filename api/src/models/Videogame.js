const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.UUID,
      default:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    released:{ 
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING
    },
    rating:{
      type: DataTypes.INTEGER
    },
    
  }, {timestamps : false});
};
