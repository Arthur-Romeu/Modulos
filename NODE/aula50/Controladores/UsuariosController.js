const UsuariosServices = require('../Servicos/UsuariosServices')
const bcrypt = require('bcrypt')

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

async function postUsuarios(req, res) {
    const emailUsuario = req.body

    const emailJaExistente = await UsuariosServices.buscarEmail(emailUsuario.email)

    if (emailJaExistente) {
        return res.status(400).json({
            statusCode: 400,
            erro: 'Email já existente!'
        })
    }

    const salt = bcrypt.genSaltSync(12)
    const criptografia = await bcrypt.hash(emailUsuario.senha, salt)

    const usuario = await UsuariosServices.criarUsuario({
        nome: emailUsuario.nome,
        email: emailUsuario.email,
        senha: criptografia
    })
    return res.status(201).json({
        statusCode: 201,
        dados: usuario
    })
}



module.exports = {
    getUsuarios,
    getUsuario,
    postUsuarios
}