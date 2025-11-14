// Requirir o arquivo sequelize
const Sequelize = require('sequelize')

// criar a configuração para se conectar ao banco de dados

const sequelize = new Sequelize('livraria', 'root', 'arthur2025', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
})

module.exports = sequelize