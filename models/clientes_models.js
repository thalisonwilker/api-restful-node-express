const mongoose = require('mongoose')

clienteModel = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:String,
    telefone:String
})

module.exports = mongoose.model('clientes', clienteModel )