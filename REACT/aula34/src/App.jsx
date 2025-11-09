import './App.css'
import { ContextoLista, ContextoListaProvider } from './componentes/atividade1/ContextoLista'
import FormularioTarefas from './componentes/atividade1/FormularioTarefas'
import ListaImportantes from './componentes/atividade1/ListaImportantes'
import ListaNormais from './componentes/atividade1/ListaNormais'
import { ContextoFuncionarios, ContextoFuncionariosProvider } from './componentes/atividade2/ContextoFuncionarios'
import FormularioFuncionario from './componentes/atividade2/FormularioFuncionario'
import TotalFuncionarios from './componentes/atividade2/TotalFuncionarios'
import InforFuncionarios from './componentes/atividade2/InforFuncionarios'

function App() {
  
  return (
    <>
    <h1>Aula 34</h1>
      <ContextoFuncionariosProvider>
        <FormularioFuncionario />
        <InforFuncionarios />
        <TotalFuncionarios />
      </ContextoFuncionariosProvider>


      <ContextoListaProvider>
        <FormularioTarefas />
        <ListaNormais />
        <ListaImportantes />
      </ContextoListaProvider>
    </>
  );

}

export default App
