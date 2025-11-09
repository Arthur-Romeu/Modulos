import { useState } from "react";

function Atividade1(){
    const [cor, setCor]= useState('Click para mudar o titulo')

    return(
        <div>
            <h1>{cor}</h1>

            <div>
                <button onClick={()=> setCor('Vermelho')}>Vermelho</button>
                <button onClick={()=> setCor('Verde')}>Verde</button>
                <button onClick={()=> setCor('Azul')}>Azul</button>
            </div>
        </div>
        
        
    )
}

export default Atividade1