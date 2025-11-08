function mostrarFeriados(ano) {
    let url = `https://brasilapi.com.br/api/feriados/v1/${ano}`

    fetch(url)
    .then((resposta)=> resposta.json())
    .then(dados =>{
        const divAno = document.querySelector(`#div${ano}`)
        divAno.innerHTML = `<h1>Feriado do ano de ${ano}</h1>`

        dados.forEach((itemferiado)=> {
        const titulo2 = document.createElement('h2');
        const titulo3 = document.createElement('h3');

        
        titulo2.innerHTML = itemferiado.name
        titulo3.innerHTML = itemferiado.date
        divAno.append(titulo2, titulo3)
        })
        
    })
    .catch((erro)=> {
        console.log('Deu ruim')
    })
}

const botoes = document.querySelectorAll('button')
botoes[0].addEventListener('click', ()=> {mostrarFeriados(2023)})

botoes[1].addEventListener('click', ()=> {mostrarFeriados(2024)})

botoes[2].addEventListener('click', ()=> {mostrarFeriados(2025)})