const router = require('express').Router()

const clienteModel = require('../models/clientes_models')

router.get('', (req, res) => {
    clienteModel.find()
    .then( clientes =>{
        res.send(clientes)
    })
    .catch( err => {
        res.send({
            erro: true,
            message: "Ocorreu uma falha ao tentar buscar os clientes ..."
        })
        console.log(err)
    } )
})

router.get('/:id', (req, res) =>{
    clienteModel.findOne({
        _id: req.params.id
    })
    .then( cliente =>{
        if(cliente){
            res.send({
                erro: true,
                cliente: cliente
            })
        }else{
            res.send({
                erro: true,
                message: "Este cliente não existe no sistema."
            })
        }
    })
    .catch( err => {
        res.send({
            erro: true,
            message: "Ocorreu uma falha ao tentar buscar o cliente ..."
        })
        console.log(err)
    })
})

router.post('', (req, res) => {
    new clienteModel(req.body)
    .save()
    .then( cliente => {
        res.send({
            erro: false,
            message: `Bem vindo ao meu sistema ${req.body.nome}!`
        })
    })
    .catch( err => {
        res.send({
            erro: true,
            message: "Ocorreu uma falha ao tentar inserir este cliente..."
        })
        console.log(err)
    })
})

router.put('/:id', (req, res) => {
    clienteModel.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
        )
        .then( ()=> {
            res.send({
                erro: false,
                message: "Alteração bem sucedida."
            })
        } )
        .catch( err => {
            res.send({
                erro: true,
                message: "Ocorreu uma falha ao tentar alterar os dados clientes..."
            })
            console.log(err)
        } )
})

router.delete('/:id', (req, res) => {
    clienteModel.findOneAndDelete({
        _id: req.params.id
    })
    .then( () => {
        res.send({
                erro: false,
                message: "o cliente não faz mais parte deste sistema."
            })
    })
    .catch( err => {
        res.send({
            erro: true,
            message: "Ocorreu uma falha ao tentar remover este cliente cliente..."
        })
        console.log(err)
    } )
})
module.exports = router