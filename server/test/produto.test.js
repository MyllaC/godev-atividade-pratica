const axios = require('axios')

test('Deve obter os produtos do banco de dados', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'get'
  })

  const resposta = response.data
  expect(resposta).toHaveLength(3)
})

test('O preço do terceiro produto deve ser 3.99', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'get'
  })

  const resposta = response.data
  const preco = resposta[2].preco
  expect(preco).toBe('R$ 3,99')
})

test('Deve obter o status 200', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'get'
  })

  const status = response.status
  expect(status).toEqual(200)
})
