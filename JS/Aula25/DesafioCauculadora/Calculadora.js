let numseOperadores = document.querySelector('p')
let expressao = ""
let apagar = document.querySelector('#apagar')
let resultado = document.querySelector('#igual')

// colocar os valores dos numeros e operadores na calculadora
function colocar(valor) {
    numseOperadores.textContent += valor
    expressao = numseOperadores.textContent
}

function calcular() {
    try {
        let resultado = eval(expressao)
        numseOperadores.textContent = resultado
        expressao = resultado.toString()
    } catch (e) {
        numseOperadores.textContent = "Erro"
        expressao = ""
    }
}

function limpar(limpar) {
    if (apagar) {
        apagar = limpar
        numseOperadores.textContent = apagar.remove
    }
}