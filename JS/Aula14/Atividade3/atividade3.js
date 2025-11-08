let num = Number(prompt('Digite um número'))

if(num%2 == 0 && num >= 0){
    alert(Math.sqrt(num))
    console.log(Math.sqrt(num))
}

else if(num%2 != 0 && num >= 0){
    alert(num **3)
    console.log(num **3)
}

else if(num <= 0 || isNaN(n)){
    alert('Sua entrada é inválida')
}




let etiqueta = prompt('Escolha uma roupa com uma cor de etiqueta:')
let valorProtudo = Number(prompt('Digite um valor para as roupas:'))
let valorFinal

while (etiqueta != 'vermelho' && etiqueta != 'verde' && etiqueta != 'amarelo') {
    alert('Essa cor de etiqueta não possui desconto, portanto escolha outra cor!')
    prompt('Escolha uma roupa com uma cor de etiqueta:')
}
     
switch (etiqueta) {
    case 'vermelho':
        valorFinal = valorProtudo * (1 - 0.3)
        console.log('Etiqueta vermelha, 30% de desconto '  + valorFinal)
        break;

    case 'verde':
        valorFinal = valorProtudo * (1 - 0.15)
        console.log('Etiqueta verde, 15% de desconto '  + valorFinal)
        break;

    case 'amarelo':
        valorFinal = valorProtudo * (1 - 0.05)
        console.log('Etiqueta amarela, 5% de desconto '  + valorFinal)
        break;

    default:
        break;
}