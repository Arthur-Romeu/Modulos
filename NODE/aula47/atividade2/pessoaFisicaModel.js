const sequelize = require('./sequelize.js')
const { DataTypes } = require('sequelize')
const clienteModel = require('./clienteModel.js')

const pessoaFisicaModel = sequelize.define('pessoaFisica', {
    pfid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    sobrenome: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    cpf: {
        type: DataTypes.INTEGER(12),
        allowNull: false
    },

    rg: {
        type: DataTypes.INTEGER(20),
        allowNull: false
    },

    dataDeNascimento: {
        type: DataTypes.DATE
    },

    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: clienteModel,
            key: 'id'
        }
    }
})

module.exports = pessoaFisicaModel