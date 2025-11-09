import './App.css'
import Rotas from './Atividade1/rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'
import BarraDeNavegacao from './Atividade1/componentes/BarraDeNavegacao'

function App() {

  return (
    <>
      <h1>Aula 35</h1>

      <BrowserRouter>
        <Rotas />
        <BarraDeNavegacao />
      </BrowserRouter>
    </>
  )
}

export default App
