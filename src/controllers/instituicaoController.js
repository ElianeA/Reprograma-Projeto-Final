const mongoose = require('mongoose')
const { request } = require('../app')
const Instituicao = require('../models/instituicao')

//Cria instituicao
const criaInstituicao = async(req, res) => {
    const instituicao = new Instituicao({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        descricao: req.body.descricao,
        responsavel: req.body.responsavel,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        horarioAbertura: req.body.horarioAbertura,
        horarioFechamento: req.body.horarioFechamento,
        tipoRecebimento: req.body.tipoRecebimento,
        produto: req.body.produto,
        criadoEm: req.body.criadoEm
    })

    const instituicaoJaExiste = await Instituicao.findOne({ nome: req.body.nome })
    if (instituicaoJaExiste) {
        return res.status(409).json({ error: "Instituição já cadastrada!" })
    }

    try {
        const novaInstituicao = await instituicao.save()
        res.status(201).json(novaInstituicao)
    } catch (err) {
        res.status(500).json({ essage: err.message })
    }
}

//Mostra instituições
const mostraInstituicoes = async(req, res) => {
    try {
        const instituicoes = await Instituicao.find()
        return res.status(200).json(instituicoes)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

//Mostra instituicões por id
const getById = async(req, res) => {
    try {
        const instituicao = await Instituicao.findById(req.params.id)
        if (instituicao == null) {
            return res.status(404).json({ message: 'Instituicao  não encontrada' })
        }
        res.status(200).json(instituicao)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Mostra instituições por bairro


//Moatra instituições por produto


//Update instituicao
const atualizaInstituicao = async(req, res) => {
    const encontraInstituicao = await Instituicao.findById(req.params.id)
    if (encontraInstituicao == null) {
        res.status(404).json({ message: 'Instituição não encontrada!' })
    }

    if (req.body.nome != null) {
        encontraInstituicao.nome = req.body.nome
    }
    if (req.body.descricao != null) {
        encontraInstituicao.descricao = req.body.descricao
    }
    if (req.body.nome != null) {
        encontraInstituicao.nome = req.body.nome
    }
    if (req.body.responsavel != null) {
        encontraInstituicao.responsavel = req.body.responsavel
    }
    if (req.body.endereco != null) {
        encontraInstituicao.endereco = req.body.endereco
    }
    if (req.body.bairro != null) {
        encontraInstituicao.bairro = req.body.bairro
    }
    if (req.body.cidade != null) {
        encontraInstituicao.cidade = req.body.cidade
    }
    if (req.body.telefone != null) {
        encontraInstituicao.telefone = req.body.telefone
    }
    if (req.body.horarioAbertura != null) {
        encontraInstituicao.horarioAbertura = req.body.horarioAbertura
    }
    if (req.body.horarioFechamento != null) {
        encontraInstituicao.horarioFechamento = req.body.horarioFechamento
    }
    try {
        //Salvar no banco de dado as alteracoes
        const instituicaoAtualizada = await encontraInstituicao.save();
        //manda a resposta com a informação atualizada
        res.status(200).json(instituicaoAtualizada)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Delete
const deleteInstituicao = async(req, res) => {
    const encontraInstituicao = await Instituicao.findById(req.params.id)
    if (encontraInstituicao == null) {
        return res.status(404).json({ message: 'Instituicao não encontrada!' })
    }
    try {
        await encontraInstituicao.remove()
        res.status(200).json({ message: 'A instituicao foi deletada com sucesso!' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    criaInstituicao,
    mostraInstituicoes,
    getById,
    atualizaInstituicao,
    deleteInstituicao
}