const express = require('express')
const DisciplinasController = require('../Controladores/DisciplinasController')

const rotaDisciplinas = express.Router()

rotaDisciplinas.get('/', DisciplinasController.getDisciplinas)

rotaDisciplinas.get('/:id', DisciplinasController.getDisciplina)

module.exports = rotaDisciplinas