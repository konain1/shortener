
const URL = require('../model/urlmodel')
var shortenUrl = require('shorten-url')

async function HandlerGenerateNewShortId(req,res){
    
    let url = req.body.url
    
   let shorten =  shortenUrl(url, 19)
   
    await URL.create({
            shortid:shorten,
            redirectURL:url,
    })

    res.json({msg:shorten})
}

async function GetData(req,res){
    let shortenURLs = await URL.find()

    res.json({msg:shortenURLs})
}

module.exports = {HandlerGenerateNewShortId , GetData}