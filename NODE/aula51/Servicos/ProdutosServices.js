const ProdutosModels = require('../Modelo/ProdutosModels')

function buscarTodosOsProdutos() {
    return ProdutosModels.findAll()
}

function buscarProdutosID(id) {
    return ProdutosModels.findByPk(id)
}

module.exports = {
    buscarTodosOsProdutos,
    buscarProdutosID
}