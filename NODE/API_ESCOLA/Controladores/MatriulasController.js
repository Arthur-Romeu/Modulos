const MatriculasServices = require('../Servicos/MatriculasServices')

// criar função assíncrona que leia o array e mostre todas as matrículas

async function getMatriculas(req, res) {
    const matriculas = await MatriculasServices.buscarTodosAsMatriculas()

    let arrayMatriculas = matriculas.map(matricula => {
        return matricula.dataValues
    })

    if (arrayMatriculas.length > 0) {
        res.status(200).json({
            statusCode: 200,
            dados: arrayMatriculas
        })
    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Não há matrículas ou não foram encontradas.'
        })
    }
}

// criar uma função assíncrona que mostre a matrícula através do ID

async function getMatricula(req, res) {
    const id = req.params.id

    const matricula = await MatriculasServices.buscarMatricula(id)

    if (matricula) {
        res.status(200).json({
            statusCode: 200,
            dados: matricula
        })
    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Matrícula não encontrada'
        })
    }
}

module.exports = {
    getMatriculas,
    getMatricula
}