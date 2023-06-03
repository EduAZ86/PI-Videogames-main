const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    metacritic:{
      type: DataTypes.STRING
    },
    stores:{
      type: DataTypes.ARRAY(DataTypes.STRING)      
    },
    short_screenshots:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    }


    
  }, {timestamps : false});
};


