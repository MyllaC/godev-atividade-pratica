const produtosData = require('../data/produtosData')

exports.getProdutos = function () {
  return produtosData.getProdutos()
}

exports.getProdutosById = function (id) {
  return produtosData.getProdutosById(id)
}
