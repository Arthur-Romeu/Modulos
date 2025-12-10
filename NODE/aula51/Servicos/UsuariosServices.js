const { where } = require('sequelize')
const UsuariosModels = require('../Modelo/UsuariosModels')

function buscarTodosOsUsuarios() {
    return UsuariosModels.findAll()
}

function buscarUsuariosID(id) {
    return UsuariosModels.findByPk(id)
}

function buscarEmail(email) {
    return UsuariosModels.findOne({
        where: {
            email: email
        }
    })
}

//criar um usuario
const criarUsuario = (objUsuario) => {
    return UsuariosModels.create(objUsuario)
}

module.exports = {
    buscarTodosOsUsuarios,
    buscarUsuariosID,
    criarUsuario,
    buscarEmail
}