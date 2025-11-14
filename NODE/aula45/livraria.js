const express = require('express')

const app = express()

app.use(express.json())

let livros = [
    { id: 1, titulo: 'O Senhor dos Aneis', autor: 'J.R.R. Tolkien', preco: 49.90 },
    { id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', preco: 39.90 },
]

app.get('/', (req, res) => {
    res.send('API DA BIBLIOTECA DO CLEITINHO V.1.0.0')
    res.end()
})


app.get('/livros', (req, res) => {
    res.json({
        qtdLivros: livros.length,
        livros: livros
    })
    res.end()
})


app.post('/livros', (req, res) => {
    let livro = req.body
    livros.push({
        id: livros.length + 1,
        titulo: livro.titulo,
        autor: livro.autor,
        preco: livro.preco
    })
    res.json({
        status: 'Livro adicionado com sucesso',
        livro: livro
    })

    console.log('Livro adicionado com sucesso')
    res.end()
})

app.put('/livros/:id', (req, res) => {
    let idLivro = req.params.id
    let livro = req.body

    let procurandoLivro = livros.find((livro) => livro.id == idLivro)

    if (!procurandoLivro) {
        res.status(404).json({
            erro: 'Livro não encontrado'
        })
        res.end()
        return
    }

    let indexLivro = livros.indexOf(procurandoLivro)
    livros[indexLivro] = { ...procurandoLivro, ...livro }

    res.json({
        mensagem: 'Livro atualizado com sucesso'
    })

    res.status(200).json(procurandoLivro)

    console.log(livros)
})

app.listen(3000, () => {
    console.log('Servidor criado na porta 3000!')
})