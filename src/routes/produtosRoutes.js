const express = require("express")
const router = express.Router()
const controller = require('../controllers/produtoController')

//Criar um produto -> POST -> save()
router.post('/', controller.criaProduto)

//Ler todos os produtos -> GET -> find()
router.get('/', controller.mostraProdutos)

//Ler por produto -> GET -> find()
router.get('/', controller.mostraProdutosInstituicao)

//Ler todos os produtos por id -> GET -> find()
router.get('/:id', controller.getById)

//Ler todos os produtos por bairro -> GET -> find()

//Atualizar alguma informação do produto -> Patch -> update()
router.patch('/:id', controller.atualizaProduto)

//Deletar um dado do produto baseado no Id -> DELETE -> remove()
router.delete('/:id', controller.deleteProduto)

module.exports = router