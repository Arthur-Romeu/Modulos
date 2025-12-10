// importar os modelos para serem reutilizados
const { where } = require('sequelize')
const ProfessoresModels = require('../Modulos/ProfessoresModels')



// criar funções que vão ser controladas com base no modelo dos arquivos
// cada função vai ter um serviço diferente
function buscarTodosOsProfessores() {
    return ProfessoresModels.findAll()
}

function buscarProfessor(id) {
    return ProfessoresModels.findByPk(id)
}

function areaDeAtuacao(area) {
    return ProfessoresModels.findOne({
        where: {
            area_atuacao: area
        }
    })
}

// cadastra um professor na disciplina

const cadastrarProfessor = (objProfessor) => {
    return ProfessoresModels.create(objProfessor)
}

// exportar as funções para serem controladas

module.exports = {
    buscarProfessor,
    buscarTodosOsProfessores,
    areaDeAtuacao,
    cadastrarProfessor
}