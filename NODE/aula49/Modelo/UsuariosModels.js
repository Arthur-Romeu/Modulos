const sequelize = require('./ConfigBanco')
const { DataTypes, INTEGER } = require('sequelize')

const UsuariosModel = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncremnte: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING(20)
    }
})

module.exports = UsuariosModel