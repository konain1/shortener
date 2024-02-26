
const express = require('express')

const {HandleUserSignUp,signup,HandleUserLogin ,afterLogin} = require('../controller/userfn')

const route = express.Router();

route.post('/signup',HandleUserSignUp)
route.get('/signup',signup)
route.post('/login',HandleUserLogin)
route.post('/afterlogin',afterLogin)
module.exports = route