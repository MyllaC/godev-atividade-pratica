const axios = require('axios')

test('Deve obter http status 200 - select : GET', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'get'
  })
  const httpStatus = response.status
  expect(httpStatus).toBe(200)
})

test('Deve obter http status 201 - insert: POST', async function () {
  const novoProduto = {
    descricao: 'Descrição Produto 003',
    preco: 3.99,
    tipo_produto: 'Tipo de produto 003'
  }
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'post',
    data: novoProduto
  })

  const httpStatus = response.status
  console.log(novoProduto.preco)
  expect(httpStatus).toBe(201)
})

test('Deve obter http status 204 - update : PUT', async function () {
  const updateProduto = {
    id: 3,
    descricao: 'Nova Descrição Produto 003',
    preco: 3.33,
    tipo_produto: 'Novo Tipo de produto 003'
  }
  const idUpdate = 3
  const response = await axios({
    url: `http://localhost:3000/produtos/${idUpdate}`,
    method: 'put',
    data: updateProduto
  })
  const httpStatus = response.status
  expect(httpStatus).toBe(204)
})

test('Deve obter http status 204 - delete : DELETE', async function () {
  const idDelete = 2
  const response = await axios({
    url: `http://localhost:3000/produtos/${idDelete}`,
    method: 'delete'
  })
  const httpStatus = response.status
  expect(httpStatus).toBe(204)
})

test('Deve obter http status 200 - select by id: GET', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos/1',
    method: 'get'
  })
  const httpStatus = response.status
  expect(httpStatus).toBe(200)
})

test('Deve obter http status 404 - select by id: GET', async function () {
  const response = await axios({
    url: 'http://localhost:3000/produtos/10000',
    method: 'get',
    validateStatus: false
  })
  const httpStatus = response.status
  expect(httpStatus).toBe(404)
})
