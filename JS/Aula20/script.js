// let conta = {
//     titular: 'João Marcos',
//     numero: '12345-6',
//     agencia: '001',
//     saldo: 1000,
//     limiteEmprestimo: 5000,
//     divida: 0
// }

// function sacar(objConta, valor) {
//     objConta.saldo -= valor
//     return objConta
// }
// console.log(sacar(conta, 200))

// function depositar(objConta, valor) {
//     objConta.saldo += valor
//     return objConta
// }
// console.log(depositar(conta, 400))

// function emprestar(objConta, valor) {
//     objConta.limiteEmprestimo -= valor
//     return objConta
// }
// console.log(emprestar(conta, 320))

// function pagarDivida(objConta, valor) {
//     depositar(objConta, valor)

//     sacar(objConta, valor)

//     emprestar(objConta, valor)
//     objConta.divida += valor

//     return objConta
// }
// console.log(pagarDivida(conta, 500))

// function caixaEletronico(objConta, escolhaOpcao, valor) {
//     escolhaOpcao(objConta, valor)
//     console.log(`A função recebeu os parâmetros: ${objConta.titular}, ${escolhaOpcao}, ${valor}`)
// }
// caixaEletronico(conta, depositar, 300)
// caixaEletronico(conta, sacar, 100)
// caixaEletronico(conta, emprestar, 150)

let funcionario = {
    nome: 'José',
    idade: 19,
    salario: 3500,
    cargo: 'Programador'
}

function auxiliar(objeto, funcao) {
    funcao(objeto)
}
auxiliar(funcionario, (objeto) =>{
    for (let propriedades in objeto) {
        console.log(`${propriedades}: ${objeto[propriedades]}`)
    }
})