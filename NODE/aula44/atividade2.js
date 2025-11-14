// crie um servidor que tenha 2 rotas
//primeira rota deve apresentar a api (/)
//segunda rota deve apresentar o array de produtos (/produtos)
//as respostas devem ser no formato json com charset=utf-8
let produtos = [
    { id: 1, nome: 'teclado', preco: 100 },
    { id: 2, nome: 'mouse', preco: 50 },
    { id: 3, nome: 'monitor', preco: 500 },
    { id: 4, nome: 'cadeira', preco: 300 },
    { id: 5, nome: 'fone de ouvido', preco: 150 }
]

const http = require('http')

const serverProdutos = http.createServer((req, res) => {
    res.writeHeader(200, { 'content-type': 'application/json; charset=utf-8' })

    if (req.url === '/') {
        res.write(
            JSON.stringify({
                api: 'Atividade 2 com o método http',
                nome: 'Arthur'
            })
        )
        res.end()
        return
    }

    else if (req.url === '/produtos') {
        res.write(
            JSON.stringify({ produtos })
        )
        res.end()
        return
    }
    else if (req.url !== '/' && req.url !== '/produtos') {
        res.writeHead(404)
        res.write(
            JSON.stringify({ erro: 'Rota não encontrada' })
        )
    }
    res.end()
})

// criar um servidor
function iniciarServidorProduto() {

    serverProdutos.listen(3000, () => {
        console.log('Servidor iniciado na porta 3000.')
    })
}

module.exports = { iniciarServidorProduto }