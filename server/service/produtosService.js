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

exports.selectProdutoByDescricaoTipo = async function (descricaoTipoProduto) {
  const produto = await produtosData.selectProdutoByDescricaoTipo(
    descricaoTipoProduto
  )
  if (!produto) {
    throw new Error('Produtos não encontrados para o tipo informado!')
  }
  return produto
}

exports.insertNovoProduto = function (novoProduto) {
  if (novoProduto.preco == undefined) {
    throw new Error('O campo preço e obrigatório!!!')
  }
  // if (typeof(novoProduto.preco) !== Number){
  //     throw new Error('O campo preço possui valores inválidos!!!');
  // }
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

exports.resetBanco = async function () {
  let a = await produtosData.resetBanco()
}
