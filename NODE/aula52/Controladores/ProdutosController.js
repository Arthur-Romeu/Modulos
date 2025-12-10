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

async function postProduto(req, res) {
    //verificar se existe um produto com o mesmo nome
    const nomeProduto = req.body.nome
    const produtoEncontrado = await ProdutosServices.buscarProdutoPorNome(nomeProduto)
    if (produtoEncontrado) {
        res.status(400).json({
            statusCode: 400,
            erro: 'Produto com o mesmo nome ja cadastrado'
        })
        return
    }
    const produto = await ProdutosServices.criarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    })
    res.status(201).json({
        statusCode: 201,
        produto: produto
    })
}

module.exports = {
    getProdutos,
    getProduto,
    postProduto
}