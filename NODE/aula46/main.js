const sequelize = require('./models/sequelize')

sequelize.authenticate()

    .then(() => {
        sequelize.sync().then(() => {
            console.log('Tabelas criadas com Sucesso!')
        })
    })

    .catch((erro) => {
        console.log('Erro ao se conectar ao banco de dados' + erro)
    })