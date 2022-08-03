const { func } = require('../infra/conection')
const database = require('../infra/conection')

exports.getProdutos = function () {
  return database.query('SELECT * FROM produto')
}

exports.selectProdutoById = function (id) {
  return database.oneOrNone('SELECT * FROM produto WHERE id = $1', [id])
}

exports.selectProdutoByDescricaoTipo = function (descricaoTipoProduto) {
  return database.query(
    'SELECT p.descricao, p.preco FROM produto p INNER JOIN tipo_produto tp ON tp.id = p.id_tipo_produto WHERE tp.descricao ILIKE $1',
    [descricaoTipoProduto]
  )
}

exports.insertNovoProduto = function (produto) {
  database.none(
    'INSERT INTO produto (descricao, preco, id_tipo_produto) VALUES  ($1, $2, $3)',
    [produto.descricao, produto.preco, produto.tipo_produto]
  )
}

exports.updateProduto = function (id, produto) {
  database.none(
    'UPDATE produto SET descricao = $1, preco = $2, id_tipo_produto = $3 WHERE id = $4',
    [produto.descricao, produto.preco, produto.tipo_produto, id]
  )
}

exports.deleteProduto = function (id) {
  database.none('DELETE FROM produto WHERE id = $1', [id])
}

//Preparação do banco de dados

exports.resetBanco = function () {
  return database.query(`
        DROP TABLE IF EXISTS produto;
        DROP TABLE IF EXISTS tipo_produto;
    
        CREATE TABLE tipo_produto (
            id SERIAL PRIMARY KEY,
            descricao VARCHAR(100) NOT NULL
        );
    
        INSERT INTO tipo_produto (descricao)
        VALUES ('Higiene'), ('Vestuário'), ('Alimentício'), ('Limpeza');
    
        CREATE TABLE produto (
            id SERIAL PRIMARY KEY,
            descricao VARCHAR(100) NOT NULL,
            preco MONEY NOT NULL,
            id_tipo_produto INT REFERENCES tipo_produto (id)
        );  
    
        INSERT INTO produto (descricao, preco, id_tipo_produto)
        VALUES
            ('Sabonete','R$ 2,50','1'),
            ('Creme Dental','4,90','1'),
            ('Meia','10,00','2'),
            ('Calça','49,90','2'),
            ('Arroz','25,00','3'),
            ('Cueca','10,00','2'),
            ('Feijão','8,00','3'),
            ('Sabão em Pó','15,00','4'),
            ('Camisa','59,00','2'),
            ('Macarrão','5,99','3');
                        `)
}
