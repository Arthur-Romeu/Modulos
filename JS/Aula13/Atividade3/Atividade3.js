let x = Number(prompt('Digite um número (apenas valores numéricos):'))
let y = Number(prompt('Digite outro número (apenas valores numéricos):'))

if(x > y){
    console.log('x é maior que y')
    alert('Seu primeiro número é maior que o segundo.')
}

else if(x == y){
    console.log('x e y são iguais')
    alert('Seus dois números são iguais')
}

else{
    console.log('x é menor que y')
    alert('Seu segundo número é maior que o primeiro')
}
// Comparação de de dois números

let A = Number(prompt('Digite um número (apenas valores numéricos):'))
let B = Number(prompt('Digite outro número (apenas valores numéricos):'))
let C = Number(prompt('Digite mais outro número (apenas valores numéricos):'))

if((A + B) > C){
    console.log('A soma dos dois números é maior que C')
    alert('A soma dos seus dois primeiros números é maior que o terceiro')
}

else if((A + B) == C){
    console.log('São valores iguais')
    alert('A soma dos seus dois primeiros números é igual ao seu último número')
}

else{
    console.log('A soma dos dois números é menor que C')
    alert('A soma dos seus dois primeiros números é menor que o terceiro')
}
// Comparação de três números

let n1 = Number(prompt('Digite apenas números'))

if(n1%2 == 0){
    console.log('É um valor par pois, a divisão não possui um resto')
    alert('Seu número é par')
}

else{
    console.log('É um valor ímpar pois, a divisão possui um resto')
    alert('Seu número é impar')
}
// Ímpar ou par

A = Number(prompt('Digite um número (apenas valores numéricos):'))
B = Number(prompt('Digite outro número (apenas valores numéricos):'))

if(A == B){
    console.log(A + B)
    alert('Seus dois números são iguais, por isso somou-se entre eles')
}

else{
    console.log(A * B)
    alert('Seus dois números são diferente e multiplicou-se entre eles')
}
// Adição e multiplicação de números

let z = Number(prompt('Digite apenas um número'))

if(z%2 == 0){
    console.log(z + 5)
    alert('Seu número é par, logo, somou-se 5')
}

else{
    console.log(z + 8)
    alert('Seu número é ímpar, logo somou-se 8')
}

