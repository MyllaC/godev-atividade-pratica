DROP TABLE produto; -- 01 Apaguei a tabela produto junto com todos os seus dados.

CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    preco MONEY NOT NULL,
    tipo_produto VARCHAR NOT NULL
);                 -- 02 Criei a tabela produtos sem nenhum dados.

INSERT INTO produto (descricao, preco, tipo_produto)
VALUES
    ('Descrição Produto 001', 1.99, 'Tipo de produto 001'),
    ('Descrição Produto 002', 2.99, 'Tipo de produto 002');
                   -- 03 Criei duas novas linhas na tabela produtos com dados.

SELECT * FROM produto;
                   -- 04 Recuperei/Selecionei para mostrar todas as linha da tabela produtos
                   
INSERT INTO produto (descricao, preco, tipo_produto)
VALUES
    ('Descrição Produto 003', 3.99, 'Tipo de produto 003');
SELECT * FROM produto WHERE ID = 3    
                   