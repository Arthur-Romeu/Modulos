// let quantidadeProdutos = Number(prompt('Digite quantos produtos você irá levar'))
// let somaProdutos = 0;

// for (let num = 0; num <= quantidadeProdutos; num++) {
//     let produtoUser = Number(prompt("Digite o valor do produto:"));

//     somaProdutos += produtoUser;

//     console.log(produtoUser)
// }

// console.log(`A soma dos produtos é ${somaProdutos}`);

// let clientes = 5
// let somaLojaA = 0
// let somaLojaB = 54000

// for (let num = 1; num <= clientes; num++) {
//     valorCompra = Number(prompt('Digite um valor de compra:'));

//     somaLojaA += valorCompra;

//     console.log(somaLojaA)
// }
//  if (somaLojaA > somaLojaB) {
//         alert(`A loja A faturou mais do que a loja B. O faturamento da loja A é ${somaLojaA}`)
//         console.log(`O faturamento ultrapassou ao da loja B`)
//     }

//     else if (somaLojaA == somaLojaB) {
//         alert(`As duas loja teve o mesmo faturamento. O faturamento da loja A é ${somaLojaA}`)
//         console.log('O faturamento ficou igualado com a da loja B')
//     }

//     else{
//         alert(`A loja A faturou menos do que a loja B. O faturamento da loja A é ${somaLojaA}`)
//         console.log('O faturamento não alcançou o da loja B')
//     }
 
// console.log(`A loja A teve esse faturamento ${valorCompra}`)

let numUser = Number(prompt('Digite um número'))

for (let num = 1; num <= 10; num++) {
    let tabuada = numUser * num

    console.log(`${num} x ${numUser} = ${tabuada}`)
}