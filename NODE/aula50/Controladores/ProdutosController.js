const ProdutosServices = require('../Servicos/ProdutosServices')

async function getProdutos(req, res) {
    const produtos = await ProdutosServices.buscarTodosOsProdutos()

    let arrayProdutos = produtos.map(produto => {
        return produto.dataValues
    })

    if (arrayProdutos.length > 0) {
        res.status(200).json({
            statusCode: 200,
            dados: arrayProdutos
        })
    }
    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Nenhum produto encontrado'
        })

    }
}

async function getProduto(req, res) {
    const id = req.params.id

    const produtosID = await ProdutosServices.buscarProdutosID(id)

    if (produtosID) {
        res.status(200).json({
            statusCode: 200,
            produto: produtosID
        })

    }

    else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Nenhum produto por ID encontrado'
        })

    }

}

module.exports = {
    getProdutos,
    getProduto
}