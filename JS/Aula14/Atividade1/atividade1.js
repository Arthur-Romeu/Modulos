let idade = Number(prompt('Digite sua idade:'))
let habilitado = Number(prompt('Você está habilitado? (1) SIM ou (2) NÃO:'))

if(idade >= 18 && habilitado == 1){
    alert('Você pode alugar seu carro')
}

else{
    alert('Perdão, mas você não pode alugar um carro. Caso você tenha errado suas informações, reatualize a página para colocar suas novas informações.')
}


