const DisciplinasServices = require('../Servicos/DisciplinasServices')

// criar função assíncrona que leia o array e mostre todas as disciplinas

async function getDisciplinas(req, res) {
    const disciplinas = await DisciplinasServices.buscarTodosAsDisciplinas()

    let arrayDisciplinas = disciplinas.map(disciplina => {
        return disciplina.dataValues
    })

    if (arrayDisciplinas.length > 0) {
        res.status(200).json({
            statusCode: 200,
            dados: arrayDisciplinas
        })
    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Não há disciplinas ou não foram encontradas.'
        })
    }
}

// criar uma função assíncrona que mostre a matrícula través do ID

async function getDisciplina(req, res) {
    const id = req.params.id

    const disciplina = await DisciplinasServices.buscarDisciplina(id)

    if (disciplina) {
        res.status(200).json({
            statusCode: 200,
            dados: disciplina
        })
    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'disciplina não encontrada'
        })
    }
}

module.exports = {
    getDisciplinas,
    getDisciplina
}