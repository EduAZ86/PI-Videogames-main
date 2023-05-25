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
      allowNull: true
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    background_image: {
      type: DataTypes.STRING
    },
    released:{ 
      type: DataTypes.STRING,
    },
    rating:{
      type: DataTypes.INTEGER
    },
    source: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
    
  }, {timestamps : false});
};


