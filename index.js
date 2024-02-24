
const express =require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')


mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/feb23').then(()=>console.log('connected to db 9014'))

const Router = require('./routes/url')
const path = require('path')
const app = express();
app.use(express.json())

//setting view engine to ejs
app.set("view engine", "ejs");
app.set('views',path.resolve('./view'))


app.use('/',Router)
app.use('/ejs',Router)
// app.use('/' , Router)



app.listen(9014,()=>console.log(`server runs on 9014`))