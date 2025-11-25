const Sequelize = require('sequelize')

const sequelize = new Sequelize('atividade2', 'root', 'arthur2025', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize