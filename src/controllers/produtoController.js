const mongoose = require('mongoose');
const Produto = require('../models/produto');

//Cria Produto
const criaProduto = async(req, res) => {
    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        orientacao: req.body.orientacao,
        instituicao: req.body.instituicao,
        criadoEm: req.body.criadoEm
    })

    /*  const produtoJaExiste = await Produto.findOne({ nome: req.body.nome })
    if (produtoJaExiste) {
        return res.status(409).json({
            error: "Poduto já existe na instituicao!"
        })
    }*/

    try {
        const novoProduto = await produto.save()
        return res.status(201).json(novoProduto)
    } catch (err) {
        return res.statu(400).json({ message: error.message })
    }
}

//Mostra Produto
const mostraProdutos = async(req, res) => {
    const produtos = await Produto.find().populate('instituicao')
    return res.status(200).json(produtos)

}

//Mostra Produto por Id
const getById = async(req, res) => {
    try {
        const produto = await Produto.findById(req.params.id)
        if (produto == null) {
            return res.status(404).json({ message: 'produto não encontrado' })
        }
        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Mostra Produto por Bairro

//Mostra Produto por instituicao
const mostraProdutosInstituicao = async(req, res) => {
        const produtos = await Produto.find().populate('instituicao')
        const produtosFiltrado = produtos.filter(produto => produto.instituicao.nome = nome)

        return res.status(200).json(produtosFiltrado)
    }
    //Update produto
const atualizaProduto = async(req, res) => {
    const encontraProduto = await Produto.findById(req.params.id)
    if (encontraProduto == null) {
        res.status(404).json({ message: 'Produto não encontrado!' })
    }

    if (req.body.nome != null) {
        encontraProduto.nome = req.body.nome
    }
    if (req.body.orientacao != null) {
        encontraProduto.orientacao = req.body.orientacao
    }
    try {
        //Salvar no banco de dado as alteracoes
        const produtoAtualizada = await encontraProduto.save();
        //manda a resposta com a informação atualizada
        res.status(200).json(produtoAtualizada)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Delete
const deleteProduto = async(req, res) => {
    const encontraProduto = await Produto.findById(req.params.id)
    if (encontraProduto == null) {
        return res.status(404).json({ message: 'Produto não encontrada!' })
    }
    try {
        await encontraProduto.remove()
        res.status(200).json({ message: 'O Produto  foi deletado com sucesso!' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    criaProduto,
    mostraProdutos,
    getById,
    atualizaProduto,
    deleteProduto
}