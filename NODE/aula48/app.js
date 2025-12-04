const express = require('express')

const clientesControladores = require('./controladores/clientesControladores')

const app = express()
app.use(express.json())


app.get('/', clientesControladores.paginaPrincipal)

app.get('/cliente', clientesControladores.retornarOsClientes)

app.get('/novoCliente', clientesControladores.retornarNovoCliente)

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000.')
})