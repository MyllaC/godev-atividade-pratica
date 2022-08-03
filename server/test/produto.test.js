const axios = require('axios')
const produtoService = require('../service/produtosService')

beforeEach(() => {
  produtoService.resetBanco()
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

test('Deve retornar um produto com a descrição "Creme Dental"', async function () {
  const id = 2
  const response = await axios({
    url: `http://localhost:3000/produtos/${id}`,
    method: 'get'
  })
  const objetoJson = response.data
  const descricao = objetoJson.descricao
  expect(descricao).toBe('Creme Dental')
})

test('Deve retornar a mensagem "Produto não encontrado!"', async function () {
  const idProdutoNaoCadastrado = 9999
  const response = await axios({
    url: `http://localhost:3000/produtos/${idProdutoNaoCadastrado}`,
    method: 'get',
    validateStatus: false
  })
  const mensagem = response.data

  expect(mensagem).toBe('Produto não encontrado!')
})

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
    preco: '3.99',
    tipo_produto: '1'
  }
  const response = await axios({
    url: 'http://localhost:3000/produtos',
    method: 'post',
    data: novoProduto
  })

  const httpStatus = response.status
  expect(httpStatus).toBe(201)
})

test('Deve obter http status 204 - update : PUT', async function () {
  const updateProduto = {
    id: 3,
    descricao: 'Nova Descrição Produto 003',
    preco: '3.33',
    id_tipo_produto: 'Novo Tipo de produto 003'
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

test('Deve retornar todos os produtos com o tipo "Vestuário"', async function () {
  const descricaoTipoProduto = 'Vestuário'
  const response = await axios({
    url: `http://localhost:3000/produtos/tipo-produto/${descricaoTipoProduto}`,
    method: 'get'
  })

  const objetoJson = response.data
  console.log(objetoJson)
  expect(objetoJson.length).toEqual(4)
})
