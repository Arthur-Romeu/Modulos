// fetch('https://viacep.com.br/ws/01001000/json')//promisse
// .then((response)=> response.json()) //convertemos o corpo da resposta para objeto
// .then(objetoResposta => console.log(objetoResposta))
// .catch((erro)=>{
//     console.log('Deu ruim')
//     console.log(erro.message)
// })



fetch('https://viacep.com.br/ws/72236800/json')

.then((resposta)=> resposta.json())

.then(dadosLugar => console.log(dadosLugar.bairro))

.catch((erro)=>{
    console.log('Lugar não encontrado')
    console.log(erro.message)
})



