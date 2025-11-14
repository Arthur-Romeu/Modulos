//crie um arquivo chamado operacoesBasicas que exporte as seguintes funcoes
//somar, subtrair, dividir, multiplicar
//faça a requisição do modulo operacoesBasicas no arquivo main.js (ou em seu arquivo principal)
//realize a chamada da função somar com os parâmetros 10 e 8 e utilize o resultado para calular média (10+8)/2. Mostre o resultado no console

function somar(a,b){
    return a + b;
}

function subtrair(a,b){
    return a - b;
}

function dividir(a,b){
    return a/b;
}

function multiplicar(a,b){
    return a*b;
}

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}