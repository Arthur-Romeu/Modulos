// let palavraUser = prompt('Digite uma palavra:')
// let palavraInvertida = ''

// let ultimaPalavra = palavraUser.length

// for (let i = ultimaPalavra - 1; i <= 0; i--) {
//     palavraInvertida += palavraUser[i]
// }

// if(palavraInvertida == palavraUser){
//         console.log('É um palíndromo')
//     }

//     else{
//         console.log('Não é um palíndromo')
//     }

// let dadosUsuario = {
//     nome: prompt('Digite seu nome:'),

//     email: prompt('Digite seu email:'),

//     senha: prompt('Digite uma senha:'),

//     DatadeNascimento: Number(prompt('Digite sua data de nascimento:')),

//     CPF: Number(prompt('Digite um CPF:')),

//     cargo: prompt('Digite seu cargo:')
// }
// console.log(dadosUsuário)

// dadosUsuário.senha = prompt('Digite uma nova senha:')

let aluno = {
    nome: 'João',
    idade: 20,
    curso: 'ADS',
    notas: [],
    media: undefined
}
console.log(aluno)

aluno.notas.push(7)
aluno.notas.push(8)
aluno.notas.push(5)

let somaNotas = aluno.notas[0] + aluno.notas[1] + aluno.notas[2]
aluno.media = somaNotas / aluno.notas.length

console.log(aluno)

if (aluno.media >= 7) {
    aluno.situacao = 'aprovado'
}

else{
    aluno.situacao = 'reprovado'
}

for (x in aluno) {
    console.log(`${x} : ${aluno[x]}`)
}
