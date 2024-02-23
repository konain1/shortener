const mongoose = require('mongoose')


const urlSchema = new mongoose.Schema({
    shortid:{
        type:String,
        require:true,
    },
    redirectURL:{
        type:String,
        require:true,
    },
    visithistory:[{timestamp:{type:Number}}]
})


let URL = mongoose.model('bitlyfy',urlSchema)

module.exports = URL