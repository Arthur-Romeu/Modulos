// importar os modelos para serem reutilizados
const DisciplinasModels = require('../Modulos/DisciplinasModels')

// criar funções que vão ser controladas com base no modelo dos arquivos
// cada função vai ter um serviço diferente
function buscarTodosAsDisciplinas() {
    return DisciplinasModels.findAll()
}

function buscarDisciplina(id) {
    return DisciplinasModels.findByPk(id)
}

function buscarDisciplinasCadastradas(disciplina) {
    return DisciplinasModels.findOne({
        where: {
            nome: disciplina
        }
    })
}

// criar uma disciplina
function criarDisciplina(objDisciplina) {
    return DisciplinasModels.create(objDisciplina)
}

// exportar as funções para serem controladas

module.exports = {
    buscarDisciplina,
    buscarTodosAsDisciplinas,
    buscarDisciplinasCadastradas,
    criarDisciplina
}