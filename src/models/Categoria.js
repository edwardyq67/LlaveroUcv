const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Categoria = sequelize.define('categoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Categoria;