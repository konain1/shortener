
const express = require('express')

const {HandleUserSignUp,signup,HandleUserLogin} = require('../controller/userfn')

const route = express.Router();

route.post('/signup',HandleUserSignUp)
route.get('/signup',signup)
route.get('/login',HandleUserLogin)
module.exports = route