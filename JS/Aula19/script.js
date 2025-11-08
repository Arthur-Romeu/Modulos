function compararNumeros() {
    let numero1 = Number(prompt('Digite um número:'))
    let numero2 = Number(prompt('Digite um segundo número:'))

    if (numero2 > numero1) {
        console.log(`O seu segundo número (${numero2}) é maior que o primeiro número (${numero1}).`)
        alert(`O seu segundo número (${numero2}) é maior que o primeiro número (${numero1}).`)
    }

    else if (numero1 == numero2){
        console.log(`Seu dois números são iguais (${numero1},${numero2}).`)
        alert(`Seu dois números são iguais (${numero1},${numero2}).`)
    }

    else{
        console.log(`Seu segundo número (${numero2}) é menor que o primeiro número (${numero1}).`)
        alert(`Seu segundo número (${numero2}) é menor que o primeiro número (${numero1}).`)
    }
}
compararNumeros()

function informar(palavra){
    let quantidadeLetras = palavra.lenght
    console.log(`A palavra ${palavra} possui ${quantidadeLetras} letras`)
}
notas1 = 7
notas2 = 5
notas3 = 9 

function calcularMedia(notas1, notas2, notas3){

let media =  (notas1 + notas2 + notas3)/ 3

if (media < 4) {
    return ('Reprovado')
}

else if (media <= 6 && media >= 4) {
    return ('Recuperação')
}

else{
    return ('Aprovado')
}
}
console.log(calcularMedia(notas1, notas2, notas3))









