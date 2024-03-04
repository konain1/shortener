const mongoose = require('mongoose')


const urlSchema = new mongoose.Schema({
    shortid:{
        type:String,
        require:true,
        unique:true,
        
    },
    redirectURL:{
        type:String,
        require:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    visithistory:[{timestamp:{type:Number}}]
})


let URL = mongoose.model('bitlyfy',urlSchema)

module.exports = URL