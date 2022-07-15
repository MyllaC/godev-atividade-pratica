const produtosData = require('../data/produtosData')

exports.getProdutos = function () {
  return produtosData.getProdutos()
}

exports.getProdutosById = function () {
  return produtosData.getProdutosById(id)
}
