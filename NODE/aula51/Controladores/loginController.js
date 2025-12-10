const bcrypt = require('bcrypt')
const UsuariosServices = require('../Servicos/UsuariosServices')
const JWT = require('jsonwebtoken')

async function login(req, res) {
    const objUsuario = req.body

    const usuarioEncontrado = await UsuariosServices.buscarEmail(objUsuario.email)

    if (!usuarioEncontrado) {
        res.status(400).json({
            statusCode: 400,
            erro: 'O usuário não cadastrado'
        })
        return
    }

    const senhaCorreta = await bcrypt.compare(objUsuario.senha, usuarioEncontrado.senha)



    if (senhaCorreta) {
        const token = JWT.sign({
            email: usuarioEncontrado.email,
            senha: usuarioEncontrado.senha
        }, 'chave-secreta', { expiresIn: '1h' })

        res.status(200).json({
            statusCode: 200,
            confirmacao: token
        })
    }



    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Email ou senha incorretos'
        })
    }
}
module.exports = login