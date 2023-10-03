const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt=require('bcrypt')
const Usuario = sequelize.define('usuario', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require:true
    },
    gmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        require:true
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require:true
    },
    numero:{
        type: DataTypes.STRING,
        allowNull: false,
        require:true
    }
});
Usuario.beforeCreate(async user=>{
    const hasshPassword=await bcrypt.hash(user.password,10)
    user.password=hasshPassword
})
Usuario.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
}

module.exports = Usuario;