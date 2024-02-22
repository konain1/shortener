

const express = require('express')

const {HandlerGenerateNewShortId} = require('../controller/urlsfn')
const Router = express.Router()


Router.post('/shortid',HandlerGenerateNewShortId)


module.exports = Router
