

const express = require('express')

const {HandlerGenerateNewShortId,GetData, homelander} = require('../controller/urlsfn')
const Router = express.Router()


Router.post('/makeshorten',HandlerGenerateNewShortId)
Router.get('/getshorten',GetData)
Router.get('/myhome',homelander)
module.exports = Router
