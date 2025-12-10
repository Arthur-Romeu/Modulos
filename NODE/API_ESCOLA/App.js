const express = require('express')
const cors = require('cors')
const iniciarServidor = require('./Servidor')

const rotaAlunos = require('./Rotas/RotasAlunos')
const rotaProfessores = require('./Rotas/RotasProfessores')
const rotaDisciplinas = require('./Rotas/RotasDisciplinas')
const rotaMatriculas = require('./Rotas/RotasMatriculas')
const rotaNovoAluno = require('./Rotas/RotasNovoAluno')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        api: 'Revisão do conteúdo de Node.js da aula51 com a api escola.',
        autor: 'Arthur',
        versao: '1.0.0'
    })
})

app.use('/alunos', rotaAlunos)
app.use('/professores', rotaProfessores)
app.use('/disciplinas', rotaDisciplinas)
app.use('/matriculas', rotaMatriculas)
app.use('/novoaluno', rotaNovoAluno)

iniciarServidor(app)