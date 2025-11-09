//Crie um componente PesquisarProduto que é um input do tipo text que para submeter a pesquisa use o componente estilizado do botão. 
//o input terá um borda azul e um background azul claro

import styled from 'styled-components';
import { Button } from './ButtonStyled';

export const Input = styled.input`
    border: 1px solid blue;
    background-color: lightblue;
`

export default function InputStyled(){
    return(
        <div>
            <form action="#">
                <h3>Atividade 1</h3>
                <Input></Input>
                <Button>Cadastrar</Button>
            </form>
        </div>
    )
}