//Exercício 3: Crie um controlador para retornar todos os clientes e o status code 200 e um controlador para cadastrar um novo cliente. Verificar as infomações:
// nome, idade, raca, cor. Caso a idade seja maior que 20, retorne o status code 400 e uma mensagem de erro

//Caso as informacoes de nome e raça sejam vazias retorne o status code 400 com uma mensagem de erro

//Caso contrario, todas as validacoes sejam ok, com todas as informacoes corretas retorne o status code 200 com uma mensagem de sucesso e mostre a lista atualizada de clientes no console

const clientesServicos = require('../servicos/clientesServicos.js')

function paginaPrincipal(req, res) {
    res.json({
        api: 'Aula 48 de Node.js, com apresentação das camadas no modelo MVC',
        nome: 'Arthur'
    })
}

function retornarOsClientes(res, req) {
    const cliente = clientesServicos.obterTodosClientes()

    if (cliente) {
        res.status(200)
        res.json(cliente)
        console.log(cliente)
        console.log('Sucesso ao encontrar os clientes!')
        return
    }


}

function retornarNovoCliente(res, req) {
    const novoCliente = req.body

    if (cliente.idade > 20) {
        res.status(400)
        res.json({
            erro: 'Idade maior que 20'
        })
    }

    if (!novoCliente.nome || !novoCliente.raca) {
        res.status(400)
        res.json({
            erro: 'Cliente sem nome ou sem raça!'
        })
    }

    else {
        res.status(200)
        res.json(novoCliente)
        console.log('Sucesso no novo cliente!' + novoCliente)
    }
}

module.exports = {
    paginaPrincipal,
    retornarOsClientes,
    retornarNovoCliente
}