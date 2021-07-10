const express = require('express');
const router = express.Router();
const controller = require('../controllers/instituicaoController')

//CREATE -> POST -> save()
router.post('/', controller.criaInstituicao)

//READ -> GET -> find()
router.get('/', controller.mostraInstituicoes)

//Ler todos as instituicoes  por id -> GET -> find()
router.get('/:id', controller.getById)

//Ler todas as instituicoes por bairro -> GET->find

//UPDATE -> PATCH -> getById() ou  findOne e save()
router.patch('/:id', controller.atualizaInstituicao)

//DELETE ->DELETE -> getById() ou  findOne e remove()
router.delete('/:id', controller.deleteInstituicao)


module.exports = router