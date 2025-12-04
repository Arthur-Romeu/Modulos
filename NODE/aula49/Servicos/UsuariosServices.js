const UsuariosModels = require('../Modelo/UsuariosModels')

function buscarTodosOsUsuarios() {
    return UsuariosModels.findAll()
}

function buscarUsuariosID(id) {
    return UsuariosModels.findByPk(id)
}

module.exports = {
    buscarTodosOsUsuarios,
    buscarUsuariosID
}