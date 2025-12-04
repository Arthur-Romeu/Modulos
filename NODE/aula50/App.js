const sequelize = require('./Modelo/ConfigBanco')
const express = require('express')



const UsuariosModels = require('./Modelo/UsuariosModels')
const ProdutosModels = require('./Modelo/ProdutosModels')
const ProdutosController = require('./Controladores/ProdutosController')
const UsuariosController = require('./Controladores/UsuariosController')
const validacaoUsuarioMiddleware = require('./middleware/validacaoUsuarioMiddleware')
const loginController = require('./Controladores/loginController')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        api: 'API do Magazine Cleitinho v1.0.0',
        autor: 'Arthur',
        versao: '1.0.0'
    })
})

// app.get('/usuarios', UsuariosController.getUsuarios())

app.get('/produtos', ProdutosController.getProdutos)
app.get('/produtos/:id', ProdutosController.getProduto)

app.get('/usuarios', UsuariosController.getUsuarios)
app.get('/usuarios/:id', UsuariosController.getUsuario)

app.post('/usuarios', validacaoUsuarioMiddleware, UsuariosController.postUsuarios)

app.post('/login', loginController)

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000.')

    sequelize.authenticate()
        .then(() => {
            console.log('Conecção ao banco de dados com sucesso!')

            sequelize.sync({ alter: true }).then(() => {
                console.log('Tabelas sincronizadas com sucesso!')
            })
        })

        .catch((erro) => {
            console.log('Erro ao sincronizar com o banco' + erro)
        })
})

