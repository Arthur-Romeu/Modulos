import { Link } from "react-router-dom";

import Home from "../paginas/Home";
import SobreNos from "../paginas/SobreNos";
import Contatos from "../paginas/Contatos";

function BarraDeNavegacao(){
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to="/sobrenos">Sobre nós</Link>
            </li>
            <li>
                <Link to="/contatos">Contatos</Link>
            </li>
        </ul>
    )
}
export default BarraDeNavegacao