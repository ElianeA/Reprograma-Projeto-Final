const express = require('express')
const cors = require("cors")
const db = require('./data/database')

const index = require('./routes/index')
const instituicao = require('./routes/instituicoesRoutes')
const produto = require('./routes/produtosRoutes')

db.connect()

const app = express()

app.use(cors())
app.use(express.json())


app.use('/', index)
app.use('/instituicoes', instituicao)
app.use('/produtos', produto)

module.exports = app