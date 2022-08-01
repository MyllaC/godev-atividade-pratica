const produtosData = require('../data/produtosData')

exports.getProdutos = function () {
  return produtosData.getProdutos()
}

exports.selectProdutoById = async function (id) {
  const produto = await produtosData.selectProdutoById(id)
  if (!produto) {
    throw new Error('Produto não encontrado!')
  }
  return produto
}

exports.insertNovoProduto = function (novoProduto) {
  if (novoProduto.preco == undefined) {
    throw new Error('O campo preço é obrigatório!!!')
  }
  if (typeof novoProduto.preco !== typeof 2) {
    throw new Error(
      `O campo preço possui valores inválidos!!! ${typeof novoProduto.preco}`
    )
  }
  if (Number(novoProduto.preco) < 0.0) {
    throw new Error('O campo preço deve conter valores maiores que zero!!')
  }
  produtosData.insertNovoProduto(novoProduto)
}

exports.updateProduto = function (id, produto) {
  produtosData.updateProduto(id, produto)
}

exports.deleteProduto = function (id) {
  produtosData.deleteProduto(id)
}
