
const express =require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/feb23').then(()=>console.log('connected to db 9014'))

const Router = require('./routes/url')

const app = express();
app.use(express.json())
app.use('/makeshorten',Router)
app.use('/getshorten',Router)



app.listen(9014,()=>console.log(`server runs on 9014`))