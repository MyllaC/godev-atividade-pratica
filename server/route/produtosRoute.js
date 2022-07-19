const express = require('express')
const router = express.Router()
const produtoService = require('../service/produtosService')

router.get('/produtos', async function (req, res) {
  let produtosJSON = await produtoService.getProdutos()
  res.json(produtosJSON)
})

router.get('/produtos/:id', async function (req, res) {
  const id = req.params.id

  let produtosJSON = await produtoService.getProdutosById(id)
  res.json(produtosJSON)
})

router.post('/produtos', async function (req, res) {
  const dados = req.body
  let produto = await produtoService.insertNovoProduto(dados)

  res.json(produto)
})

router.put('/produtos/:id', async function (req, res) {
  const dados = req.body
  const id = req.params.id

  let produto = await produtoService.updateProduto(id, dados)

  res.json(produto)
})

router.delete('/produtos/:id', async function (req, res) {
  res.send('Método DELETE')
})

module.exports = router
