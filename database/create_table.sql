CREATE TABLE produto (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(100) NOT NULL,
  preco MONEY NOT NULL,
  tipo_produto VARCHAR NOT NULL,
);