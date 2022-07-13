const pgp = require('pg-promise')()

const bancoDeDados = pgp({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: '5432',
  database: 'bd_lojinha'
})

module.exports = bancoDeDados
