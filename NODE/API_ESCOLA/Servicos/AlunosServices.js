// importar os modelos para serem reutilizados
const { where } = require('sequelize')
const AlunosModels = require('../Modulos/AlunosModels')



// criar funções que vão ser controladas com base no modelo dos arquivos
// cada função vai ter um serviço diferente
function buscarTodosOsAlunos() {
    return AlunosModels.findAll()
}

function buscarAluno(id) {
    return AlunosModels.findByPk(id)
}

// criar uma função que leia o email do aluno

function buscarEmail(email) {
    return AlunosModels.findOne({
        where: {
            email: email
        }
    })
}

// criar uma variável que crie um email do aluno caso o email não esteja cadastrado

const cadastrarAluno = (objAluno) => {
    return AlunosModels.create(objAluno)
}

// exportar as funções para serem controladas

module.exports = {
    buscarTodosOsAlunos,
    buscarAluno,
    buscarEmail,
    cadastrarAluno
}