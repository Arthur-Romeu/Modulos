import { useEffect, useState } from "react";

function Atividade1(){
    const [num1, setNum1]= useState(0)
    const [num2, setNum2]= useState(0)

    function mostrarNoConsole(){
        console.log(`O valor da variável num : ${num1**2} e o valor da variável num2 : ${num2**2}`)
    }

    useEffect(mostrarNoConsole,[num1, num2])

    return(
        <div>
            <button onClick={()=> setNum1(prompt('Digite um número.'))}>Botão 1</button>
            <button onClick={()=> setNum2(prompt('Digite um número.'))}>Botão 2</button>
        </div>
    )
}

export default Atividade1
//Atividade 1
// Para usar o conceito do useEffect na atividade 1 utilize um componente criado com 2 botões. Ao clicar no botão 1 o usuário deverá passar 1 número para uma variável e ao clicar no botão 2 deverá passar o valor para outra variável.
// uma função de callback deverá ser criada para mostrar os valores armazenados nas variáveis de estado controlado ao quadrado no console, sempre que elas forem atualizadas.

// dicas: use o useState e o useEffect, com um array de dependências.
