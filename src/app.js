const express = require('express')
const cors = require("cors")

// conectar db
const db = require('./src/data/database')
db.connect()

const app = express()

app.use(cors())
app.use(express.json())

// usar as rotas
const index = require('./src/routes/index')
const instituicao = require('./src/routes/instituicoesRoutes')
const produto = require('./src/routes/produtosRoutes')

app.use('/', index)
app.use('/instituicoes', instituicao)
app.use('/produtos', produto)

module.exports = app