const sequelize = require('./sequelize.js')
const { DataTypes } = require('sequelize')
const clienteModel = require('./clienteModel.js')

const pessoaJuridicaModel = sequelize.define('psessoaJuridica', {
    pjid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: clienteModel,
            key: 'id'
        }
    }
})

module.exports = pessoaJuridicaModel