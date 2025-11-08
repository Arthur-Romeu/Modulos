let pessoas = ['ana', 'joão', 'pedro', 'maria']
let atendidos = []
//adicione Claudio no início do array
//Substitua pedro por Paulo
//remova Maria e adicione na lista de  atendidos
//remova a primeira pessoa do array e adicione no início do array atendidos

//pop
//push
//shift
//unshift

pessoas.unshift('Cláudio')

let i = pessoas.indexOf('pedro')

pessoas[i] = 'Paulo'
pessoas.pop()
console.log(pessoas)

