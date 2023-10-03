const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Llavero = sequelize.define('modelName', {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    //categoriaID
    //imgId,color
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Llavero;