import { useState } from "react";

function Atividade2(){
    const acesa = 'https://th.bing.com/th/id/OIP.9q1l2Q1NqvYBgb9DUF3bZwHaHa?w=166&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
    const apagada = 'https://th.bing.com/th/id/OIP.fWSY7q40Ut_Yhtj1qYI6RQAAAA?w=125&h=171&c=7&r=0&o=7&pid=1.7&rm=3'

    const [url, setUrl]= useState(acesa)

    return(
        <div>
            <img src={url} alt="" />
            <button onClick={()=> setUrl(acesa)}>Ligar</button>
            <button onClick={()=> setUrl(apagada)}>Desligar</button>
        </div>
    )
}

export default Atividade2