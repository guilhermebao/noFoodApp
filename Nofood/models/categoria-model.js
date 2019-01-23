'use strict'

//Import
const mongoose = require('mongoose');
const schema = mongoose.Schema;

//trim = Não tem espaço
const categoriaModel = new schema({
    titulo: { trim: true, index: true, required:true, type: String },
    descricao: { type: String, required: true },
    ativa: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

//Antes de salvar
categoriaModel.pre('save', next => {
    let agora = new Date();
        if (!this.dataCriacao)
        this.dataCriacao = agora;
});

module.exports = mongoose.model('Categoria', categoriaModel);