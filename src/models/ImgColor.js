const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImgColor = sequelize.define('imgColor', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = ImgColor;