// Crie um botão estilizado com a cor verde e fonte branca que receba como props.children o nome a ser renderizado

//Crie um componente PesquisarProduto que é um input do tipo text que para submeter a pesquisa use o componente estilizado do botão. 
//o input terá um borda azul e um background azul claro

import { styled } from 'styled-components';

export const Button = styled.button`
    background-color: green;
    color: white;
`

export default function BotaoStyled(){
    return(
        <div>
            <Button>Pedir</Button>
        </div>
    )
}