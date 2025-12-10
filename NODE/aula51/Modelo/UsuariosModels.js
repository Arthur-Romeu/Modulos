const sequelize = require('./ConfigBanco')
const { DataTypes, INTEGER } = require('sequelize')

const UsuariosModel = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
        type: DataTypes.STRING(200),
        allowNull: false,
        DefaultValue: '$2a$12$rLwTRBEwN8PpeNs.J3b/Dug0OP4RzP0xJ4hsQCJLzw8HSXyrADp5y'
    }
})

module.exports = UsuariosModel