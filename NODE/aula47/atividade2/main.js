const clienteModel = require('./clienteModel')
const pessoaFisicaModel = require('./pessoaFisicaModel')
const pessoaJuridicaModel = require('./pessoaJuridicaModel')
const sequelize = require('./sequelize')

sequelize.authenticate()
    .then(() => {
        console.log('Conectado com banco de dados com sucesso')

        sequelize.sync({ alter: true }).then(() => {
            console.log('Tabelas sicronizadas com sucesso!')
        })
    })

    .catch((err) => {
        console.log('Erro ao se conectar com o banco' + err)
    })