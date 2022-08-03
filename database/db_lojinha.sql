DROP TABLE produto; 
DROP TABLE tipo_produto;

CREATE TABLE tipo_produto (
    id_tipo_produto SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

INSERT INTO tipo_produto (descricao)
VALUES ('Higiene'), ('Vestuário'), ('Alimentício'), ('Limpeza');




CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    preco MONEY NOT NULL,
    id_tipo_produto INT REFERENCES tipo_produto (id_tipo_produto)
);                 -- 02 Criei a tabela produtos sem nenhum dados.

INSERT INTO produto (descricao, preco, id_tipo_produto)
VALUES
    ('Sabonete', '2,50', '1'),
    ('Creme Dental', '4,90', '1'),
    ('Meia', '10,00', '2'),
    ('Calça', '49,90', '2'),
    ('Arroz', '25,00', '3'),
    ('Cueca', '10,00', '2'),
    ('Feijão', '8,00', '3'),
    ('Sabão em Pó', '15,00', '4'),
    ('Camisa', '59,00', '2'),
    ('Macarrão', '5,99', '3');
       
INSERT INTO produto (descricao, preco, id_tipo_produto)
VALUES
    ('Farinha', '2.50', '5')

-- procurar produtos

SELECT 
  p.id, p.descricao, p.preco  
FROM 
    tipo_produto tp
    INNER JOIN produto p ON p.id_tipo_produto = tp.id_tipo_produto
WHERE 
    tp.descricao ILIKE 'Alimentício'