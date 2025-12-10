// importar os modelos para serem reutilizados
const { where } = require('sequelize')
const MatriculasModels = require('../Modulos/MatriculasModels')



// criar funções que vão ser controladas com base no modelo dos arquivos
// cada função vai ter um serviço diferente
function buscarTodosAsMatriculas() {
    return MatriculasModels.findAll()
}

function buscarMatricula(id) {
    return MatriculasModels.findByPk(id)
}

// criar uma função que leia a data da matrícula

function buscarDataMatricula(data) {
    return MatriculasModels.findOne({
        where: {
            data: data
        }
    })
}

// criar uma variável que crie uma data de matrícula do aluno

const novaMatricula = (objMatricula) => {
    return MatriculasModels.create(objMatricula)
}

// exportar as funções para serem controladas

module.exports = {
    buscarTodosAsMatriculas,
    buscarMatricula,
    buscarDataMatricula,
    novaMatricula
}