const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')

const ProdutosModels = sequelize.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    quantidade: {
        type: DataTypes.INTEGER
    }
})

module.exports = ProdutosModels