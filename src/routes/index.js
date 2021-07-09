const express = require('express')
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "title": "API Recicla Já - Projeto Final Reprograma",
        "version": "1.0.0",
        "mensagem": "Bem vindas(os) ao Recicla Já - Criamos um caminho mais fácil para tornar o mundo mais sustentável"
    })
})

module.exports = router