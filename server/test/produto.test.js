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

test.only('Deve recuperar um registro no banco de dados a partir de um id', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos/2',
    method: 'get'
  })

  const resposta = response.data
  console.log(resposta)
})

test('Deve inserir um registro no banco de dados', async function () {})

test('Deve alterar um registro no banco de dados a partir de um id', async function () {})

test('Deve apagar um registro no banco de dados a partir de um id', async function () {})
