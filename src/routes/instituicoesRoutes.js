const express = require('express');
const router = express.Router();
const controller = require('../controllers/instituicaoController')

//CREATE -> POST -> save()
router.post('/', controller.criaInstituicao)

//READ -> GET -> find()
router.get('/', controller.mostraInstituicoes)

//UPDATE -> PATCH -> getById() ou  findOne e save()
router.patch('/:id', controller.atualizaInstituicao)

//DELETE ->DELETE -> getById() ou  findOne e remove()
router.delete('/:id', controller.deleteInstituicao)


module.exports = router