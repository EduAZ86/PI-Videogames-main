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
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background_image_additional: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description_raw: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
    released:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    stores:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false      
    },
    developers:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false      
    },
    tags:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false      
    },

    metacritic:{
      type: DataTypes.INTEGER
    },

    genre:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false      
    },

    platform:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false      
    }
    
    


    
  }, {timestamps : false});
};


