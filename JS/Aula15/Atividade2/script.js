let produto = 1
let valordeCompra = 0
let quantidadeFinal = Number(prompt('Digite quantos produtos você irá levar'))

while (produto <= quantidadeFinal) {
    let valorProdutos = Number(prompt(`Digite o valor do produto ${produto}`))

    produto +=valordeCompra

    produto++
}





let numero = 0
let usuario = Number(prompt('Digite um número'))

while (usuario >= numero) {
    console.log(usuario)
    usuario +=2

    if(usuario%2 != 0){
        console.log(usuario)
        usuario++
    }
}