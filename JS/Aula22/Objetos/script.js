// método para retornar todas as chaves de um objeto (Object.keys())
// verificar se no array de chaves do objeto existe a propriedade media
//estrutura condicional
// caso exista exiba a média
// caso nao exista calcule a média, adicione como propriedade e exiba a média

let aluno = {
    nome: 'João',
    idade: 20,
    curso: 'ADS',
    notas: [7,10,2,5]
}
console.log(aluno)

function verificarMedia(objeto) {
    let propriedade = Object.keys(objeto)

    
if (propriedade.includes ('media')) {
    console.log(objeto.media)
}
else{
    for (let i = 0; i < aluno.notas.length; i++) {
          let media = aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3]
          
        }
    }
console.log(media)
}

verificarMedia()