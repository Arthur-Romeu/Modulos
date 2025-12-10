const Sequelize = require('sequelize')

require('dotenv').config({ path: '../.env' })

const sequelize = new Sequelize(process.env.BANCO, process.env.USUARIO, process.env.SENHA, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.PORTA
})

// const sequelize = new Sequelize('API_LOJA', 'root', 'arthur2025', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// })

module.exports = sequelize