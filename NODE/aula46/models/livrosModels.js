const sequelize = require('./sequelize.js')
const { DataTypes, HasMany } = require('sequelize')

// importar as exportações

const autoresModels = require('./autoresModels')
const categoriasModels = require('./categoriasModels')

const livrosModels = sequelize.define('livros', {
    idLivros: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
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
        allowNull: false
    },

    autores: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
})

autoresModels.hasMany(livrosModels)
livrosModels.belongsTo(autoresModels)

livrosModels.hasOne(categoriasModels)
categoriasModels.hasOne(livrosModels)


module.exports = livrosModels