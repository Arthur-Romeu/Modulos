const express = require('express')
const NovoAlunoController = require('../Controladores/NovoAlunoController')

const rotaNovoAluno = express.Router()

rotaNovoAluno.post('/', NovoAlunoController)

module.exports = rotaNovoAluno