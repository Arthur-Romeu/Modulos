const sequelize = require('./model/sequelize')
const { DataTypes } = require('sequelize')

const categoriasModel = sequelize.define('categorias', {
    idCategorias: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

module.exports = categoriasModel