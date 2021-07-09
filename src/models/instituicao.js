const mongoose = require('mongoose');

const instituicaoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    responsavel: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    horarioAbertura: {
        type: String,
        required: true
    },
    horarioFechamento: {
        type: String,
        required: true
    },
    tipoRecebimento: {
        type: String,
        required: true
    },
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'produto'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('instituicao', instituicaoSchema)