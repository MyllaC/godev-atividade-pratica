const express = require('express')
const router = express.Router()
const produtoService = require('../service/produtosService')

router.get('/produtos', async function (req, res) {
  let produtosJSON = await produtoService.getProdutos()
  res.json(produtosJSON)
})

module.exports = router
