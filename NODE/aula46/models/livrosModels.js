const sequelize = require('./model/sequelize')
const { DataTypes, Model, BelongsTo } = require('sequelize')

// importar as exportações

const autoresModels = require('./autoresModels')
const categoriasModels = require('./categoriasModels')

const livrosModel = sequelize.define('livros', {
    idLivros: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    titulo: {
        type: DataTypes.STRING(100),
        allowNull
    },

    ano_publicidade: {
        type: DataTypes.INTEGER
    },

    preco: {
        type: DataTypes.DECIMAL(),
        allowNull: false
    },

    autores_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: autoresModels,
            key: 'idAutores'
        }
    },

    categorias_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: categoriasModels,
            key: 'idCategorias'
        }
    },

    categorias: {
        type: DataTypes.STRING(100),
        allowNull
    },

    autores: {
        type: DataTypes.STRING(100),
        allowNull
    },
})

livrosModel.BelongsTo(autoresModels)
livrosModel.BelongsTo(categoriasModels)

autoresModels.hasMany(livrosModel)
categoriasModels.hasMany(livrosModel)

module.exports = livrosModel