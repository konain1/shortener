

const express = require('express')
const {restrictedUserLoggedinOnly} = require('../middlewares/auth')

const {HandlerGenerateNewShortId,GetData, homelander,visitbyShortURL,analytics,homepage} = require('../controller/urlsfn')
const Router = express.Router()


Router.post('/makeshorten',restrictedUserLoggedinOnly,HandlerGenerateNewShortId)
Router.get('/getshorten',restrictedUserLoggedinOnly,GetData)
Router.get('/home',homelander)
Router.get('/visit/:shortid',visitbyShortURL)
Router.get('/analytics/:shortid',analytics)
Router.get('/homepage',restrictedUserLoggedinOnly,homepage)



module.exports = Router
