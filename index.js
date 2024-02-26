
const express =require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/feb23').then(()=>console.log('connected to db 9014'))

const Router = require('./routes/url')
const userRouter = require('./routes/user')
const path = require('path')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting view engine to ejs
app.set("view engine", "ejs");
app.set('views',path.resolve('./view'))


app.use('/',Router)
app.use('/ejs',Router)
app.use('/user',userRouter)
// app.use('/' , Router)



app.listen(9014,()=>console.log(`server runs on 9014`))