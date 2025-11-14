//Atividade 2
/* Crie um arquivo chamado OqueEhNodejs.txt e adicione o seguinte texto:

Node.js é um ambiente de runtime de código aberto e multiplataforma que permite executar código JavaScript fora do navegador, no lado do servidor. Ele é construído sobre o motor V8 do Google Chrome, conhecido por sua alta performance. O Node.js é amplamente utilizado para construir aplicações web, APIs, microsserviços, ferramentas de linha de comando e muito mais. 

Utilize o módulo fs para ler o conteúdo do arquivo e se existir texto, informe quantos caracteres ele possui. Caso contrário, informe que o arquivo não possui texto, ou em caso de erro informe que não foi possivel ler o arquivo*/

const fs = require('fs')

const arquivo = 'OqueEhNodeJS.txt'
const codificacao = 'utf8'

fs.readFile(arquivo, codificacao, (erro, resultado) => {
    if (erro) {
        console.log('Não foi possível ler o arquivo')
        return
    }

    else if (arquivo.length = 0) {
        console.log(`Arquivo sem conteúdo`)
    }

    else if (arquivo.length > 0) {
        console.log(`O texto possui ${resultado.length} caracteres`)
    }
})
