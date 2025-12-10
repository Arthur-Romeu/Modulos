const express = require('express')
const ProfessoresController = require('../Controladores/ProfessoresController')
const validacaoProfessorMiddleware = require('../Middleware/validacaoProfessorMiddleware')

const rotaProfessor = express.Router()

rotaProfessor.get('/', ProfessoresController.getProfessores)

rotaProfessor.get('/:id', ProfessoresController.getProfessor)

rotaProfessor.post('/', validacaoProfessorMiddleware, ProfessoresController.getAreaDeAtuacao)

module.exports = rotaProfessor