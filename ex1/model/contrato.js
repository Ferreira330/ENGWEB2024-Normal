const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
    idcontrato : Number,
    nAnuncio : String,
    tipoProcedimento : String,
    objetoContrato : String,
    dataPublicacao : String,
    dataCelebracaoContrato : String,
    precoContratual : Number,
    prazoExecucao : Number,
    NIPC_entidade_comunicante : String,
    entidade_comunicante : String,
    fundamentacao : String,
}, { versionKey: false });

module.exports = mongoose.model('contratos', contratoSchema);