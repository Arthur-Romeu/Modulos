import Home from "../paginas/Home";
import SobreNos from "../paginas/SobreNos";
import Contatos from "../paginas/Contatos";

import { Routes, Route } from 'react-router-dom';

export default function Rotas(){
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre-nos" element={<SobreNos />}/>
        <Route path="/contatos" element={<Contatos />}/>
        <Route  path="*" element={''}/>
    </Routes>
}