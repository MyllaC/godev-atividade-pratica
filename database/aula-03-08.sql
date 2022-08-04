DROP TABLE IF EXISTS empregado;
DROP TABLE IF EXISTS departamento;

CREATE TABLE departamento (
codigo              SERIAL        PRIMARY KEY,
nome   VARCHAR(100)  NOT NULL,
endereço            VARCHAR(100)  NOT NULL
);

CREATE TABLE empregado (
    codigo                SERIAL       PRIMARY KEY,
    nome                  VARCHAR(100) NOT NULL,
    salario               MONEY        NOT NULL,
    codigo_departamento   INTEGER      REFERENCES departamento(codigo),
    genero                CHAR(1)      NOT NULL
);

INSERT INTO departamento (nome, endereço) VALUES 
('Informática', 'Rua das Flores 500'),
('Contabilidade', 'Avenida Chão de Prata 1346'),
('Pessoal', 'Rua Dias Barroso 394');
 
 SELECT * FROM departamento

INSERT INTO empregado (nome, salario, codigo_departamento, genero) VALUES
('João', 800, 1, 'M'),
('Carlos', 1300, 2, 'M'),
('Natália', 950, 3, 'F'),
('Gerson', 1200, 1, 'M'),
('Patricia', 2000, 3, 'F')

 SELECT * FROM empregado
 
 
INSERT INTO empregado (nome, salario, codigo_departamento, genero) VALUES
('Filisbina', 12000, 50, 'F')

--Endereço de trabalho do Gerson?
SELECT d.endereço FROM empregado as e
INNER JOIN departamento AS d ON e.codigo_departamento = d.codigo
WHERE 
    e.nome ILIKE 'Gerson'
    
-- nome salario endereço do genero feminino    
SELECT e.nome, e.salario, d.endereço FROM empregado as e
INNER JOIN departamento AS d ON e.codigo_departamento = d.codigo
WHERE 
    e.genero ILIKE 'F'