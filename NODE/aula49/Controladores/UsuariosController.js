const UsuariosServices = require('../Servicos/UsuariosServices')

async function getUsuarios(req, res) {
    const usuarios = await UsuariosServices.buscarTodosOsUsuarios()

    let arrayUsuarios = usuarios.map(usuario => {
        return usuario.dataValues
    })

    if (arrayUsuarios.length > 0) {
        res.status(200).json({
            statusCode: 200,
            dados: arrayUsuarios
        })
    }
    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Nenhum usuário encontrado na tabela'
        })

    }
}

async function getUsuario(req, res) {
    const id = req.params.id

    const usuarios = await UsuariosServices.buscarUsuariosID(id)

    if (usuarios) {
        res.status(200).json({
            statusCode: 200,
            usuario: usuarios
        })
    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Nenhum informação encontrada na tabela'
        })
    }

}

module.exports = {
    getUsuarios,
    getUsuario
}