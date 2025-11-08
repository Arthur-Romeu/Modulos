// let nomeUser = prompt('Digite seu ou um nome:')

// document.getElementsByTagName -> retorna um htmlcollection com os elementos da pagina
// let alterar = document.getElementsByTagName('h1')[0]

// // elemento.innerHTML - altera o conteudo do elemento
// alterar.innerHTML = nomeUser

// let listaElementos = document.getElementsByClassName('Atividade')

// function atividade2(arrayComElementosClasse) {
//     let tamanho = arrayComElementosClasse.length
//     for (let i = 0; i < tamanho; i++) {
//       arrayComElementosClasse[i].style.color = 'red'
//     }
// }
// atividade2(listaElementos)

// let usuario = prompt('Digite um texto:')
// let objeto = document.getElementById('importante')
// objeto.innerHTML = `<strong> ${usuario} </strong>`


//crie uma tag ol no documento html e adicione um id
//selecione esse objeto e faça a adição de 5 itens passados pelo usuário para
// serem renderizados na tela como itens numerados

//dentro do loop de repetição:
//peça ao usuário um texto e concatene com o conteudo do innerHTML do objeto selecionado


//minhalista.innerHtml+= `novotexto interno a tag`
//minhalista.innerHtml+= `<li>${Texto digitado pelo usuario}</li>`
objeto = document.getElementById('novo')
let iterador = 5
for (let i = 0; i < iterador; i++) {
    let novotexto = prompt('Digite um algo')
    objeto.innerHTML += `<li>${novotexto}</li>`
    objeto.style.color = 'green'
}