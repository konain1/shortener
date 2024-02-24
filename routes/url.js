

const express = require('express')

const {HandlerGenerateNewShortId,GetData, homelander,visitbyShortURL} = require('../controller/urlsfn')
const Router = express.Router()


Router.post('/makeshorten',HandlerGenerateNewShortId)
Router.get('/getshorten',GetData)
Router.get('/myhome',homelander)
Router.get('/:shortid',visitbyShortURL)

module.exports = Router
