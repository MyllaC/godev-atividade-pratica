const { func } = require('../infra/conection')
const database = require('../infra/conection')

exports.getProdutos = function () {
  return database.query('SELECT * FROM produto')
}

exports.selectProdutoById = function (id) {
  return database.oneOrNone('SELECT * FROM produto WHERE id = $1', [id])
}

exports.insertNovoProduto = function (produto) {
  database.none(
    'INSERT INTO produto (descricao, preco, tipo_produto) VALUES  ($1, $2, $3)',
    [produto.descricao, produto.preco, produto.tipo_produto]
  )
}

exports.updateProduto = function (id, produto) {
  database.none(
    'UPDATE produto SET descricao = $1, preco = $2, tipo_produto = $3 WHERE id = $4',
    [produto.descricao, produto.preco, produto.tipo_produto, id]
  )
}

exports.deleteProduto = function (id) {
  database.none('DELETE FROM produto WHERE id = $1', [id])
}
