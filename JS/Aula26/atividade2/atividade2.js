//crie uma função que consome a api the cat api e gere uma imagem aleatória dentro da div divGatinho. Essa função será executada quando o botão for clicado.

//utilize o método document.createElement e o método apendChild para adicionar a imagem a div
//utilize a propriedade url do objeto resposta da api, para o src da imagem 
//utilize um envento para o objeto botão com o método addEventListener

let botaoGatinho = document.querySelector('#btnGatinho')
let imagemGatinho = document.querySelector('#divImagem')

function colocarImg() {
    let url = 'https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t'

    fetch(url)
    .then((resposta)=> resposta.json())
    .then(dadosImagem =>{
        let img = document.createElement('img')
        img.src = dadosImagem[0].url
        img.style.width = '400px'
        img.alt = 'Uma imagem de gatinho'
        img.innerHTML = ''
        imagemGatinho.appendChild('img')
    })
    .catch((erro)=>{
        console.log(erro.message)
    })
}

botaoGatinho.addEventListener('click', colocarImg)