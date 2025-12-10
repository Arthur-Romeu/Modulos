const express = require('express')
const MatriculasController = require('../Controladores/MatriulasController')

const rotaMatriculas = express.Router()

rotaMatriculas.get('/', MatriculasController.getMatriculas)

rotaMatriculas.get('/:id', MatriculasController.getMatricula)

module.exports = rotaMatriculas