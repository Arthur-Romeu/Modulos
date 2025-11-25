const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const clienteModel = sequelize.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    contrato: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    dataContrato: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

module.exports = clienteModel