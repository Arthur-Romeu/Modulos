const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')
const ProfessoresModels = require('./ProfessoresModels')

const DisciplinasModels = sequelize.define('disciplinas', {
    idDisciplinas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProfessoresModels,
            key: 'idProfessores'
        }
    }
})

module.exports = DisciplinasModels