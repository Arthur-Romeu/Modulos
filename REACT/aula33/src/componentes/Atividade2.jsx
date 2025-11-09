import { useState, useEffect } from "react";

function Atividade2(){
    const [nome, setNome]= useState('')
    const [email, setEmail]= useState('')
    const [senha, setSenha]= useState('')
    const [objeto, setObjeto]= useState(null)

    useEffect(()=>{

        if(objeto !== null){
            alert(`O formulário foi enviado com as informações de ${objeto.nome}`)
        }
    }, [objeto])

    function handleSubmit(e){
        e.preventDefault()

        if(nome !== '' && email !== '' && senha !== ''){
            setObjeto({nome, email, senha})
            console.log(objeto)
        }

        alert(`O formulário foi enviado com sucesso ${nome}`)
        setNome("")
        setEmail("")
        setSenha("")
    }

    return(
        <>
            <h1>Atividade</h1>

            <form action="#" onSubmit={handleSubmit}>

            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Nome" onChange={(e)=> setNome(e.target.value)} value={nome}/>

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>

            <label htmlFor="senha">Senha</label>
            <input type="password" placeholder="Senha" onChange={(e)=> setSenha(e.target.value)} value={senha}/>
            <input type="submit" value={'enviar'}/>
            </form>
        </>
    )
}

export default Atividade2
//Atividade 2
// Para um formulário, crie 3 inputs: nome, email e senha.
//Use o hook useState para armazenar os valores dos inputs.
//Use o hook useEffect para mostrar o nome do usuário na tela quando o formulário for enviado.
//As informações deverão ser enviadas como um objeto.
//Dica: use o preventDefault para evitar o envio do formulário.
//Dica: use o useState para armazenar os valores dos inputs.
//Dica: use 4 variáveis de estado para armazenar os valores dos inputs e o objeto montado com os valores dos inputs.