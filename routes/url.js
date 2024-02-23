

const express = require('express')

const {HandlerGenerateNewShortId,GetData} = require('../controller/urlsfn')
const Router = express.Router()


Router.post('/',HandlerGenerateNewShortId)
Router.get('/',GetData)

module.exports = Router
