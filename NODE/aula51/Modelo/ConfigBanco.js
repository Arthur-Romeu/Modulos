const Sequelize = require('sequelize')

const sequelize = new Sequelize('API_LOJA', 'root', 'arthur2025', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize