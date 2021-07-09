const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    orientacao: {
        type: String,
        required: true
    },
    instituicao: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'instituicao'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('produto', produtoSchema)