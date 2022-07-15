const database = require('../infra/conection')

exports.getProdutos = function () {
  return database.query('SELECT * FROM produto')
}

exports.getProdutosById = function (id) {
  return database.query(`SELECT * FROM produto WHERE id=${id}`)
}
