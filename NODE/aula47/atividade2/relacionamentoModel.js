const clienteModel = require('./clienteModel')
const pessoaFisicaModel = require('./pessoaFisicaModel')
const pessoaJuridicaModel = require('./pessoaJuridicaModel')

clienteModel.hasOne(pessoaFisicaModel)
clienteModel.hasOne(pessoaJuridicaModel)
pessoaFisicaModel.belongsTo(clienteModel)
pessoaJuridicaModel.belongsTo(clienteModel)