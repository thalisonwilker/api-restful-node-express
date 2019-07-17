const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://localhost/clientes-api-dev', {
        useNewUrlParser: true
    })
    .then( () => {
        console.log('Mongo pronto para o combate!')
    })
    .catch( err => {
        console.log('Woow, conexão falhou x('),
        console.log(err)
    })
}