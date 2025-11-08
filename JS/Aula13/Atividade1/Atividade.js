let num1 = Number(prompt('Digite um número (digite apenas valores numéricos não números por palavras)'))
let num2 = Number(prompt('Digite outro número (digite apenas valores numéricos não números por palavras)'))

if(num1 > num2){
    console.log('Maior')
    alert('Seu primeiro número digitado é maior que o seu segundo número')
}

else if(num1 == num2){
    console.log('Iguais')
    alert('Seus dois números são iguais')
}

else{
    console.log('Menor')
    alert('Seu segundo número é maior que o seu primeiro número')
}