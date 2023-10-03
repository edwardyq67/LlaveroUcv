const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Purchase = sequelize.define('purchase', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //userId
    //LlaveroId
});

module.exports = Purchase;