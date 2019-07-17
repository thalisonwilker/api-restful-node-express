const express = require('express')
const startdb = require('../config/db_connect')
const bodyParser = require('body-parser')

const api = express()
api.use(bodyParser.urlencoded({ extended:true }))
api.use(bodyParser.json())
api.use('/clientes', require('../router/clientes'))


startdb()
const port = 6007
api.listen(port, () => {
    console.log(`servidor iniciado em http://localhost:${port}`)
})