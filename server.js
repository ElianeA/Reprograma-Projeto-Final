const express = require('express')
const app = express()

// conectar db
const db = require('./src/data/database')
db.connect()

// usar as rotas
const instituicao = require('./src/routes/instituicoesRoutes')
const produto = require('./src/routes/produtosRoutes')

app.use(express.json())

app.use('/instituicoes', instituicao)
app.use('/produtos', produto)

app.listen(8080, () => console.log('Servidor rodando!'))