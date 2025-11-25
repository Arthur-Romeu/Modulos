const clienteModel = require('./clienteModel')

function criarContrato() {
    clienteModel.create({
        id: 2,
        contrato: 'TESTE10',
        dataContrato: '2022-01-08'
    })
        .then((cliente) => {
            console.log('Sucesso ao criar o contrato:', cliente.toJSON())
        })

        .catch((erro) => {
            console.log('Erro ao alterar o contrato' + erro)
        })
}

function alterarContrato() {
    clienteModel.findAll().then((cliente) => {
        console.log('Todos os clientes selecionados:' + cliente)
    })

    clienteModel.update(
        { contrato: 'OUTRO TESTE' },
        { where: { id: 2 } }
    )
        .then(([ID]) => {
            if (ID > 0) {
                console.log('O contrato foi atualizado')
            }

            else {
                console.log('O contrato não foi encontrado ou não foi atualizado')
            }
        })

        .catch((err) => {
            console.log('Erro ao atualizar o contrato' + err)
        })
}

function excluirContrato() {
    clienteModel.destroy({
        where: { id: 4 }
    })

        .then(() => {
            console.log('Contrato excluído com sucesso!')
        })

        .catch((err) => {
            console.log('Erro ao tentar excluir o contrato.' + err)
        })
}

excluirContrato()
criarContrato()
alterarContrato()

// crie 3 funções que recebam um objeto como parâmetro e façam o seguinte:
// criarContrato (create) -> valida se o objeto recebido tem as propriedades necessárias ao modelo de contrato e faz uma inserção no banco de dados
// alterarContrato  (update) -> altera um contrato existente no banco de dados
// excluirContrato (destroy) -> exclui um contrato existente no banco de dados