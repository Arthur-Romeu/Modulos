// importar bcrypt e JWT
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const AlunosServices = require('../Servicos/AlunosServices')

async function cadastro(req, res) {
    try {
        const objAluno = req.body

        const alunoEncontrado = await AlunosServices.buscarEmail(objAluno.email)

        if (!alunoEncontrado) {
            return res.status(404).json({
                statusCode: 404,
                erro: 'Aluno não encontrado'
            })
        }

        const senhaCorreta = await bcrypt.compare(objAluno.senha, alunoEncontrado.senha)

        if (senhaCorreta) {
            const token = JWT.sign({
                email: alunoEncontrado.email,
                senha: alunoEncontrado.senha
            }, 'chave-secreta', { expiresIn: '1d' })
            return res.status(200).json({
                statusCode: 200,
                token: token
            })
        }

        return res.status(400).json({
            statusCode: 400,
            erro: 'Email ou senha incorretos!'
        })
    } catch (erro) {
        console.error('Erro em cadastro:', erro)
        return res.status(500).json({
            statusCode: 500,
            erro: 'Erro interno ao autenticar'
        })
    }
}

module.exports = cadastro