//crie uma lista com 5 produtos
// cada produto será um objeto com as seguintes propriedades
//nome
//preco
//quantidade
//desconto
//definição feita pelo desenvolvedor

//ou definição feita pelo usuário ( que vai passar todas as informacoes pelo prompt )
// laço for para criação do array de produtos

//para os 5 produtos faça um laço for, itear sob a lista de produtos para atribuir os valores a cada produto:
//crie uma propriedade chamada valorComDesconto que recebe o valor do produto menos o desconto
//crie uma propriedade chamada valorTotal que recebe o valor do produto sem o desconto multiplicado pela quantidade

//criar o valor com o desconto do produto
//criar o valor total do produto
//mostre todas as propriedades do primeiro produto da lista usando o lop for in.

let Produtos = [
    {nome: 'Monitor gamer', preco: 450, quantidade: 3, desconto: 10},
    {nome: 'Mouse gamer', preco: 197, quantidade: 2, desconto:5},
    {nome: 'Teclado gamer', preco: 210, quantidade: 2, desconto: 5},
    {nome: 'Cadeira ergonômica', preco: 320, quantidade: 3, desconto: 10},
    {nome: 'Mousepad', preco: 98, quantidade: 4, desconto: 15}
]

listaProdutos = []
for (let i = 0; i < 5; i++) {
    let produto = {
        nome: prompt(`Digite o nome do produto gamer ${i+1}`),
        preco: Number(prompt(`Digite o preco do produto ${i+1}`)),
        quantidade: Number(prompt(`Digite a quantidade do produto ${i+1}`)),
        desconto: Number(prompt(`Digite o desconto do produto ${i+1}`))
    }
    listaProdutos.push(produto)
}
console.log(Produtos)

for (let i = 0; i < Produtos.length; i++) {
    Produtos[i].valorComDesconto = Produtos[i].preco *(1-Produtos[i].desconto/100)

    Produtos[i].valorTotal = Produtos[i].preco * Produtos[i].quantidade
}
console.log(Produtos)
for (let x in Produtos[0]) {
    console.log(`${x}: ${Produtos[0][x]}`)
}