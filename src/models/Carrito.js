const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Carrito = sequelize.define('carrito', {
    cantidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //LlaveroId
    //UsruarioId
});

module.exports = Carrito;