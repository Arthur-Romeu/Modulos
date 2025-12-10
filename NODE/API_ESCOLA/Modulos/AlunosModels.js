const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')

const AlunosModels = sequelize.define('alunos', {
    idAlunos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    data_nascimento: {
        type: DataTypes.DATE,
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
})

module.exports = AlunosModels
