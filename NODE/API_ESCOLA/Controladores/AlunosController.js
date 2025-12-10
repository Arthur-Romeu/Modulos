// importar o serviço
const AlunosServices = require('../Servicos/AlunosServices')
const MatriculasServices = require('../Servicos/MatriculasServices')
const bcrypt = require('bcrypt')

// criar uma função assíncrona que ler um array

async function getAlunos(req, res) {
    try {
        // armazenar as informações de cada função do arquivo services em uma variável
        const alunos = await AlunosServices.buscarTodosOsAlunos()

        // Variável que cria um array e mapea ele
        let arrayAlunos = alunos.map(aluno => {
            return aluno.dataValues
        })

        // condições que vão ler cada um do array e responder no console ou no servidor se há ou não um aluno
        if (arrayAlunos.length > 0) {
            return res.status(200).json({
                statusCode: 200,
                dados: arrayAlunos
            })
        }

        return res.status(404).json({
            statusCode: 404,
            erro: 'Não foi possível encontrar os alunos.'
        })
    } catch (erro) {
        console.error('Erro em getAlunos:', erro)
        return res.status(500).json({
            statusCode: 500,
            erro: 'Erro interno ao listar alunos'
        })
    }
}

// criar uma função que leia um aluno através do ID e mostre no servidor 

async function getAluno(req, res) {
    try {
        const id = req.params.id

        const aluno = await AlunosServices.buscarAluno(id)

        if (aluno) {
            return res.status(200).json({
                statusCode: 200,
                dados: aluno
            })
        }

        return res.status(404).json({
            statusCode: 404,
            erro: 'Não foi encontrado um aluno'
        })
    } catch (erro) {
        console.error('Erro em getAluno:', erro)
        return res.status(500).json({
            statusCode: 500,
            erro: 'Erro interno ao buscar aluno'
        })
    }
}

// criar um função que mostre o cadastro de cada aluno junto com a matrícula

async function postAluno(req, res) {
    try {
        const { nome, email, senha, dataDeNascimento, data_matricula } = req.body

        if (!nome || !email || !senha || !data_matricula) {
            return res.status(400).json({
                statusCode: 400,
                erro: 'Campos obrigatórios: nome, email, senha, data_matricula'
            })
        }

        const emailJaCadastrado = await AlunosServices.buscarEmail(email)

        if (emailJaCadastrado) {
            return res.status(400).json({
                statusCode: 400,
                erro: 'Email já cadastrado'
            })
        }

        const salt = bcrypt.genSaltSync(12)
        const criptografia = bcrypt.hashSync(senha, salt)

        const novoAluno = await AlunosServices.cadastrarAluno({
            nome,
            email,
            senha: criptografia,
            dataDeNascimento: dataDeNascimento
        })

        const novaMatricula = await MatriculasServices.novaMatricula({
            nome,
            dataDaMatricula: data_matricula
        })

        return res.status(201).json({
            statusCode: 201,
            dados: { aluno: novoAluno, matricula: novaMatricula }
        })
    } catch (erro) {
        console.error('Erro em postAluno:', erro)
        return res.status(500).json({
            statusCode: 500,
            erro: 'Erro interno ao cadastrar aluno'
        })
    }
}

module.exports = {
    getAlunos,
    getAluno,
    postAluno
}