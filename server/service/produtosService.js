const produtosData = require('../data/produtosData')

exports.getProdutos = function () {
  return produtosData.getProdutos()
}

exports.getProdutosById = function (id) {
  return produtosData.getProdutosById(id)
}

exports.insertNovoProduto = function (novoProduto) {
  return produtosData.insertNovoProduto(novoProduto)
}

exports.updateProduto = function (produto) {
  return produtosData.updateProduto(produto)
}
