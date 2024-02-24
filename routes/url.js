

const express = require('express')

const {HandlerGenerateNewShortId,GetData, homelander,visitbyShortURL,analytics} = require('../controller/urlsfn')
const Router = express.Router()


Router.post('/makeshorten',HandlerGenerateNewShortId)
Router.get('/getshorten',GetData)
Router.get('/myhome',homelander)
Router.get('/visit/:shortid',visitbyShortURL)
Router.get('/analytics/:shortid',analytics)



module.exports = Router
