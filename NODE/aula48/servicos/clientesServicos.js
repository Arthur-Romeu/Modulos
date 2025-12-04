// Exercicio 2:
/* Crie o serviço para obter todos os clientes e cadastrar um novo cliente (o id deve ser gerado automaticamente)*/

const bancoDeDados = require('../modelo/bancoDeDados.js')

function obterTodosClientes() {
    let clientes = bancoDeDados.clientes

    return clientes
}

function cadastrarClientes(cliente) {
    let id = bancoDeDados.clientes.length + 1

    let novoCliente = {
        id,
        ...cliente
    }

    return novoCliente
}

module.exports = {
    obterTodosClientes,
    cadastrarClientes
}