var mongoose = require('mongoose');
const { modelName } = require('../model/contrato');
var Contrato = require('../model/contrato');

module.exports.list = async () => {
    return await Contrato
        .find()
        .exec();
}

module.exports.findById = id => {
    return Contrato
        .findOne({ _id: id })
        .exec();
}

module.exports.findByEntidade = entidade => {
    return Contrato
        .find({ entidade_comunicante: entidade })
        .exec();
}

module.exports.findByTipo = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}

module.exports.findEntidades = () => {
    return Contrato
        .find()
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

module.exports.findTipos = () => {
    return Contrato
        .find()
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

module.exports.insert = contrato => {
    if ((Contrato.find({ _id: contrato._id }).exec()).length != 1) {
        var newContrato = new Contrato(contrato)
        return newContrato.save()
    }
}

module.exports.deleteContrato = id => {
    return Contrato.deleteOne({ _id: id })
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


