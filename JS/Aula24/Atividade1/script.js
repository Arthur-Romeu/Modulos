//peça ao usuário a quantidade de tarefas que ele vai fazer no dia.
//execute um script que crie uma lista e dentro da lista as atividades ( de acordo com o número passado pelo usuário) com o texto de cada uma delas

/*
nº atividades 3

<ul>
    <li> texto atividade 1 </li>
    <li> texto atividade 3 </li>
    <li> texto atividade 4 </li>
</ul>
*/
const h = document.querySelector('div')
const tarefas = prompt('Quantas atividades você vai fazer agora:')
const ul = document.createElement('ul')
ul.innerHTML = 'Atividades do usuário'
h.appendChild(ul)

for (let i = 0; i < tarefas; i++) {
    let a = prompt('Digite quais serão essas atividades:')
    let li = document.createElement('li')
    li.innerHTML = a
    ul.appendChild(li)
}
