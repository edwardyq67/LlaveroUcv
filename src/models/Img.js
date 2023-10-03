const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Img = sequelize.define('img', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicId: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Img;