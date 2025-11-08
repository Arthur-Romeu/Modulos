let num1 = prompt('Digite um valor aqui')
let num2 = prompt('Digite outro valor aqui')

num1 = Number(num1)
num2= Number(num2)

let soma = num1 + num2

alert('Sua soma é ' + soma)
// Soma dos valores

let salario = prompt('Digite salário aqui')

salario = parseFloat(salario)
salario = salario + (salario*0.2)

alert('Seu novo salário em reais (R$) é ' + salario)
// Cálculo do salário 20%

let nota1 = Number (prompt('Digite uma nota'))
let nota2 = Number (prompt('Digite outra nota'))
let nota3 = Number (prompt('Digite outra nota'))

let media = (nota1 + nota2 + nota3)/3

alert('Sua média é de ' + media)
// Média das notas

let lado = prompt('Digite um lado (apenas números)')
lado = Number(lado)

let area = lado * lado

alert('A área do seu quadrado é ' + area)
console.log('A área do seu quadrado é ' + area)
// Áre do quadrado

let base = Number(prompt('Digite uma base para seu triângulo'))
let altura = Number(prompt ('Digite uma altura'))

base = Number(base)
altura = Number(altura)

area = (base * altura) /2

alert('A área de seu triângulo é ' + area)
// Área do triângulo

let raio = Number(prompt('Digite um raio para seu círculo'))
let pi = 3.14

raio = Number(raio)

area = pi * (raio **2)

alert('A área do seu círculo é ' + area)


