//A cada mudança de valor dos campos de input ( use o evento change ), atualize o valor do parágrafo com o somatorio dos valores dos inputs

//representar todos os objetos dos inputs
//representar o parágrafo

//criar uma variável para armazenar o somatorio

//criar uma função para atualizar o valor do somatório
//atualizar o parágrafo a cada mudança

let entrada = document.querySelector('#entrada')
let pratoPrincipal = document.querySelector('#pratoPrincipal')
let sobremesa = document.querySelector('#sobremesa')
let bebida = document.querySelector('#bebida')
let totalConta = document.querySelector('#totalConta')

let valorConta = 0
let valorEntrada = 0
let valorPratoPrincipal = 0
let valorSobremesa = 0
let valorBebida = 0

function atualizarValor(valor) {
    valorConta += valorBebida + valorEntrada + valorSobremesa + valorPratoPrincipal 
}

entrada.addEventListener('change', ()=>{
    valorEntrada = Number(entrada.value)
    atualizarValor()
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log(totalConta)
})

pratoPrincipal.addEventListener('change', ()=>{
    valorEntrada = Number(pratoPrincipal.value)
    atualizarValor()
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log(totalConta)
})

sobremesa.addEventListener('change', ()=>{
    valorEntrada = Number(sobremesa.value)
    atualizarValor()
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log(totalConta)
})

bebida.addEventListener('change', ()=>{
    valorEntrada = Number(bebida.value)
    atualizarValor()
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log(totalConta)
})