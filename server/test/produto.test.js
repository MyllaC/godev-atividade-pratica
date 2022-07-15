const axios = require('axios')

test('Deve obter o status 200', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'get'
  })

  const resposta = response.data
  const status = response.status

  expect(status).toEqual(200)
  expect(resposta).toHaveLength(5)
})

test('Deve recuperar um registro no banco de dados a partir de um id', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos/2',
    method: 'get'
  })

  const resposta = response.data
  const id = resposta[0].id
  const decricao = resposta[0].descricao
  const preco = resposta[0].preco
  const tipo_produto = resposta[0].tipo_produto

  expect(id).toEqual(2)
  expect(decricao).toEqual('Descrição produto 002')
  expect(preco).toEqual('R$ 2,99')
  expect(tipo_produto).toEqual('Tipo de produto 002')
  expect(resposta).toHaveLength(1)
})

test('Deve inserir um registro no banco de dados', async function () {})

test('Deve alterar um registro no banco de dados a partir de um id', async function () {})

test('Deve apagar um registro no banco de dados a partir de um id', async function () {})
