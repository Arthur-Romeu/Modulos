//Atividade 3
/* Você recebeu um array de objetos com nome, setor e precisa criar os emails institucionais para todos esses funcionários. Depois criar os emails e adicionar como propriedade de cada objeto do array, salve essas informações em um arquivo JSON. o formato do email será o nome do funcionário . setor @ cletinhomagazine.com*/

//Dicas: USE JSON.stringify para converter o array de objetos em uma string JSON 
// use o método map para percorrer o array de objetos, produzindo um novo array de objetos com o atributo email
const fs = require('fs')

const funcionarios = [
    {
        nome: 'João',
        setor: 'TI'
    },
    {
        nome: 'Maria',
        setor: 'vendas'
    },
    {
        nome: 'Pedro',
        setor: 'logistica'
    }
]

let funcionariosEmails = funcionarios.map((objFunc)=>{
    return(
        {
            nome: objFunc.nome,
            setor: objFunc.setor,
            email: (`${objFunc.nome}.${objFunc.setor} @cleitinhomagazine.com`).toLowerCase()
        }
    )
})

funcionariosEmails =JSON.stringify(funcionariosEmails)
fs.writeFile (`./funcionariosEmails.josn`, funcionariosEmails,(erro)=>{
    if(erro){
        console.log('erro ao criar e escrever os emails no arquivo')
        return
    }
    console.log('Sucesso, arquivo criado e conteúdo adicionado')
})