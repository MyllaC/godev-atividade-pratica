const { default: axios } = require('axios')
const { request } = require('express')

test('Deve obter os produtos do banco de dados', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'get'
  })

  const resposta = response.data
  const status = response.status
  expect(status).toBe(200)
})

test('Deve recuperar um registro no banco de dados a partir de um id', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos/2',
    method: 'get'
  })
  const resposta = response.data
  console.log(response.data)
  const id = resposta[0].id
  const descricao = resposta[0].descricao
  const preco = resposta[0].preco
  const tipo_produto = resposta[0].tipo_produto

  expect(id).toBe(2)
  expect(descricao).toBe('Descrição produto 002')
  expect(preco).toBe('R$ 2,99')
  expect(tipo_produto).toBe('Tipo de produto 002')
})

test('Deve inserir um registro no banco de dados', async function () {
  const novoProduto = {
    descricao: 'Descrição Produto 003',
    preco: 'R$ 3,99',
    tipo_produto: 'Tipo de produto 003'
  }
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'post',
    data: novoProduto
  })

  const resposta = response.data
  const id = resposta.id
  const descricao = resposta.descricao
  const preco = resposta.preco
  const tipo_produto = resposta.tipo_produto

  //expect(id).toBe(3)
  expect(descricao).toBe('Descrição Produto 003')
  expect(preco).toBe('R$ 3,99')
  expect(tipo_produto).toBe('Tipo de produto 003')
})

test('Deve alterar um registro no banco de dados a partir de um id', async function () {
  const updateProduto = {
    id: 3,
    descricao: 'Nova Descrição Produto 003',
    preco: 'R$ 3,33',
    tipo_produto: 'Novo Tipo de produto 003'
  }
  const idUpdate = 3
  const response = await axios({
    url: `http://localhost:3000/produtos/${idUpdate}`,
    method: 'put',
    data: updateProduto
  })

  const resposta = response.data
  const id = resposta.id
  const descricao = resposta.descricao
  const preco = resposta.preco
  const tipo_produto = resposta.tipo_produto

  expect(id).toBe(3)
  expect(descricao).toBe('Nova Descrição Produto 003')
  expect(preco).toBe('R$ 3,33')
  expect(tipo_produto).toBe('Novo Tipo de produto 003')
})

test('Deve apagar um registro no banco de dados a partir de um id', async function () {})
