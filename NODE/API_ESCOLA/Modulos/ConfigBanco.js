const Sequelize = require('sequelize')

const sequelize = new Sequelize('api_escola', 'root', 'arthur2025', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
})
module.exports = sequelize