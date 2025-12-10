// importar o serviço
const ProfessoresServices = require('../Servicos/ProfessoresServices')
const DisciplinasServices = require('../Servicos/DisciplinasServices')

// criar uma função assíncrona que ler um array

async function getProfessores(req, res) {
    // armazenar as informações de cada função do arquivo services em uma variável
    const professores = await ProfessoresServices.buscarTodosOsProfessores()

    // Variável que cria um array e mapea ele
    let arrayProfessores = professores.map(professor => {
        return professor.dataValues
    })

    // condições que vão ler cada um do array e responder no console ou no servidor se há ou não um professor
    if (arrayProfessores.length > 0) {
        res.status(201).json({
            statusCode: 201,
            dados: arrayProfessores
        })
    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Não foi possível encontrar os professores.'
        })
    }
}

// criar uma função que leia um professor através do ID e mostre no servidor 

async function getProfessor(req, res) {
    const id = req.params.id

    const professores = await ProfessoresServices.buscarProfessor(id)

    if (professores) {
        res.status(201).json({
            statusCode: 201,
            dados: professores
        })
    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Não foi encontrado nenhum professor'
        })
    }
}

// criar um função que mostre a área de atuação do professor (a disciplina que ele atua)

async function getAreaDeAtuacao(req, res) {
    try {
        const { nome, areaDeAtuacao, disciplina } = req.body

        if (!nome || !areaDeAtuacao || !disciplina) {
            return res.status(400).json({
                statusCode: 400,
                erro: 'Campos obrigatórios: nome, areaDeAtuacao, disciplina'
            })
        }

        // verifica se já existe professor atuando na área
        const ProfessorJaAtuando = await ProfessoresServices.areaDeAtuacao(areaDeAtuacao)
        // verifica se a disciplina já está cadastrada
        const disciplinaOcupada = await DisciplinasServices.buscarDisciplinasCadastradas(disciplina)

        if (ProfessorJaAtuando || disciplinaOcupada) {
            return res.status(400).json({
                statusCode: 400,
                erro: 'Já possui um professor atuando na disciplina ou disciplina já cadastrada'
            })
        }

        // criar professor primeiro
        const professor = await ProfessoresServices.cadastrarProfessor({
            nome: nome,
            area_atuacao: areaDeAtuacao
        })

        // criar a disciplina associada ao professor
        const novaDisciplina = await DisciplinasServices.criarDisciplina({
            nome: disciplina,
            professor_id: professor.idProfessores
        })

        return res.status(201).json({
            statusCode: 201,
            dados: { professor, disciplina: novaDisciplina }
        })
    } catch (erro) {
        console.error('Erro em getAreaDeAtuacao:', erro)
        return res.status(500).json({
            statusCode: 500,
            erro: 'Erro interno ao cadastrar professor e disciplina'
        })
    }
}

module.exports = {
    getProfessores,
    getProfessor,
    getAreaDeAtuacao
}