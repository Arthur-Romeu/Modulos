const express = require('express')
const AlunosController = require('../Controladores/AlunosController')
const validacaoAlunoController = require('../Middleware/validacaoAlunoMiddleware')

const rotaAlunos = express.Router()

rotaAlunos.get('/', AlunosController.getAlunos)

rotaAlunos.get('/:id', AlunosController.getAluno)

rotaAlunos.post('/', validacaoAlunoController, AlunosController.postAluno)

module.exports = rotaAlunos