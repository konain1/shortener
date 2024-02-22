
const URL = require('../model/urlmodel')
var shortenUrl = require('shorten-url')

async function HandlerGenerateNewShortId(req,res){
    
    let url = req.body.url
    
   let shorten =  shortenUrl(url, 7)
    await URL.create({
            shortid:shorten,
            redirectURL:url
    })

    res.json({msg:shortenUrl})
}

module.exports = {HandlerGenerateNewShortId}