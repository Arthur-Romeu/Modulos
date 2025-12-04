const sequelize = require('./models/sequelize.js')
const autoresModels = require('./models/autoresModels.js')
const categoriasModels = require('./models/categoriasModels.js')
const livrosModels = require('./models/livrosModels.js')

sequelize.authenticate()
    .then(() => {
        console.log('Conectado com o banco de dados.')

        sequelize.sync({ alter: true }).then(() => {
            console.log('Tabelas sicronizdas com Sucesso!')
        })
    })

    .catch((erro) => {
        console.log('O banco de dados não foi conectado!' + erro)
    })