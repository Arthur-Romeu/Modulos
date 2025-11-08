// let dadosUser = ['Arthur Romeu, arthurromeu@gmail.com, Arthur-Romeu']

// console.log(`O meu nome de usuário ${dadosUser[0]}; Meu email de usuário git é ${dadosUser[1]}; E meu nome de usuário Git ${dadosUser[2]}`)

// let onibus = ['1 porta', '24 janelas', '42 bancos', '8 rodas']
// console.log(onibus)

// onibus [0] = '2 portas'
// console.log(onibus)

// onibus [4] = 'placa "hhh-123'
// console.log(onibus)

// let atividades = ['andar', 'correr', 'nadar']

// let atividadeUsuario = prompt('Digite quantas atividade serão feitas:')

// for (let num = 1; num <= atividadeUsuario; num++) {
//     let atividade = prompt('Digite uma atividade')
//     atividades.unshift(atividade)
// }
// console.log(atividades)

let atendimento = ['Maria', 'João', 'Paula', 'Joana', 'Ana', 'Joaquim', 'Pedro', 'Igor', 'Beatriz', 'Karen']
let clienteEspecial = 'Helena de Manuela Carlos'
let jaAtendidos = []

atendimento.unshift(clienteEspecial)
let qtdSenhas = 8

for (let senha = 1; senha <= qtdSenhas; senha++) {
    let pessoaAtendida = atendimento.shift()
    console.log(pessoaAtendida)
    jaAtendidos.push(pessoaAtendida)
}
console.log(jaAtendidos)
console.log(atendimento)