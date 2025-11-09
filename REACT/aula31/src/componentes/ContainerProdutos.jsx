import CardProduto from "./CardProduto"


function ContainerProdutos({arraysProdutos}){
    return(
        <div className="d-flex flex-wrap justify-content-center border border-black">
            {
                arraysProdutos.map((objProdutos)=>{
                    return(
                        <CardProduto nomeProduto={objProdutos.nome} imagemProduto={objProdutos.imagem} descricaoProduto={objProdutos.descricao} precoProduto={objProdutos.preco}/>
                    )
                })
            }
            
        </div>
    )
}
export default ContainerProdutos


//2) Crie um componente que seja o containerProdutos que recebrá como props um arrays de objetos e irá renderizar em lista todos eles nos cardProdutos
// nomeProduto, descricaoProduto, precoProduto, imagemProduto