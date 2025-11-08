// de acordo com a atividade 2, faça a evolução da questão para
//as atividades serão adicionadas em 2 arrays, urgentes e naoUrgentes de acordo com a informação do usuario
// em uma lista ordenada, exiba todas as atividades urgentes antes das não urgentes. 
// as atividades urgentes terão fonte vermelha
// as atividades nao urgentes terão fonte azul
//( crie css novo para as classes)

let qtdAtividadesUser = prompt('Quantas atividades você vai fazer hoje?')
let main = document.querySelector('main')
let ol = document.createElement('ol')
main.appendChild(ol)

for (let i = 1; i <= qtdAtividadesUser; i++) {
    let AtividadesUser = prompt(`Digite qual atividade ${i} de ${qtdAtividadesUser}.`)

    let ehUrgente = confirm(`A atividade ${i} é urgente? Se sim, aperte ok; se não cancele.`)

    let lista = document.createElement('li')
    lista.innerHTML = AtividadesUser
    if(ehUrgente){
        lista.classList.add('urgente')
    }

    else{
        lista.classList.add('naoUrgente')
    }
ol.appendChild(lista)
}