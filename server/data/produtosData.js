const database = require('../infra/conection')

exports.getProdutos = function () {
  return database.query('SELECT * FROM produto')
}

exports.getProdutosById = function (id) {
  return database.query('SELECT * FROM produto WHERE id = $1', [id])
}

exports.insertNovoProduto = function (produto) {
  return database.one(
    'INSERT INTO produto (descricao, preco, tipo_produto)  VALUES ($1, $2, $3) returning *',
    [produto.descricao, produto.preco, produto.tipo_produto]
  )
}

exports.updateProduto = function (id, produto) {
  return database.one(
    'UPDATE produto SET descricao = $1, preco = $2, tipo_produto = $3 WHERE id = $4',
    [produto.descricao, produto.preco, produto.tipo_produto, id]
  )
}
