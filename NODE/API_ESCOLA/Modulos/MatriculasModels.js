const AlunosModels = require('./AlunosModels')
const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')
const DisciplinasModels = require('./DisciplinasModels')

const MatriculasModels = sequelize.define('matriculas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    aluno_id: {
        type: DataTypes.INTEGER,
        references: {
            model: AlunosModels,
            key: 'idAlunos'
        }
    },

    disciplinas_id: {
        type: DataTypes.INTEGER,
        references: {
            model: DisciplinasModels,
            key: 'idDisciplinas'
        }
    },

    data_matriculas: {
        type: DataTypes.DATE,
    }
})

module.exports = MatriculasModels