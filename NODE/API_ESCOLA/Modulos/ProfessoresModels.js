const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')

const ProfessoresModels = sequelize.define('professores', {
    idProfessores: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    area_atuacao: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

module.exports = ProfessoresModels