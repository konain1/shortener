

const express = require('express')

const {HandlerGenerateNewShortId,GetData, homelander,visitbyShortURL,analytics,homepage} = require('../controller/urlsfn')
const Router = express.Router()


Router.post('/makeshorten',HandlerGenerateNewShortId)
Router.get('/getshorten',GetData)
Router.get('/home',homelander)
Router.get('/visit/:shortid',visitbyShortURL)
Router.get('/analytics/:shortid',analytics)
Router.get('/homepage',homepage)



module.exports = Router
