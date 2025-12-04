// importar os arquivos do sequelize e o DataTypes

const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const autoresModel = sequelize.define('autores', {
    idAutor: {
        type: DataTypes.INTEGER,
        autoIncremnet: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    nacionalidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    nascimento_autor: {
        type: DataTypes.DATE,
    }
})

module.exports = autoresModel