const express = require('express')
const router = express.Router()
const produtoService = require('../service/produtosService')

router.get('/produtos', async function (req, res) {
  let produtosJSON = await produtoService.getProdutos()
  res.json(produtosJSON)
})

router.get('/produtos/:id', async function (req, res) {
  const id = req.params.id
  try {
    let produtosJSON = await produtoService.selectProdutoById(id)
    res.json(produtosJSON)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

router.get(
  '/produtos/tipo-produto/:descricaoTipoProduto',
  async function (req, res) {
    const descricaoTipoProduto = req.params.descricaoTipoProduto
    try {
      let produtosJSON = await produtoService.selectProdutoByDescricaoTipo(
        descricaoTipoProduto
      )
      res.json(produtosJSON)
    } catch (e) {
      res.status(404).send(e.message)
    }
  }
)

router.post('/produtos', async function (req, res) {
  const dados = req.body
  try {
    produtoService.insertNovoProduto(dados)
    res.status(201).send('Cadastro efetuado com sucesso!!!')
  } catch (e) {
    res.status(422).send(e.message)
  }
})

router.put('/produtos/:id', async function (req, res) {
  const produto = req.body
  const id = req.params.id
  produtoService.updateProduto(id, produto)
  res.status(204).end()
})

router.delete('/produtos/:id', async function (req, res) {
  const id = req.params.id
  produtoService.deleteProduto(id)
  res.status(204).end()
})

module.exports = router
