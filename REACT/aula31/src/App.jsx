import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardProduto from './componentes/CardProduto'
import ContainerProdutos from './componentes/ContainerProdutos'
import listaProdutos from './componentes/listaProdutos'

function App() {

  return (
    <>

    <ContainerProdutos arraysProdutos={listaProdutos}/>





      <div>
        <CardProduto nomeProduto={'Produto1'} descricaoProduto={'Produto com desconto!'} precoProduto={'R$200,00'} imgProduto={'https://placehold.co/400'}/>
      </div>
    </>
  )
}

export default App
