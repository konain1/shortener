
const URL = require('../model/urlmodel')
// var shortenUrl = require('shorten-url')
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });




async function HandlerGenerateNewShortId(req, res) {
    try {
        let url = req.body.url;
        let shorten = uid.rnd();
        // const shorten = uid.generate();


        await URL.create({
            shortid: shorten,
            redirectURL: url,
        });

        res.json({ msg: shorten });
    } catch (error) {
        console.error("Error generating new short ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function visitbyShortURL(req, res) {
    try {
        let shortid = req.params.shortid;

        

      let entry =  await URL.findOneAndUpdate({ shortid: shortid }, {
            $push: {
                visithistory: {
                    timestamp: Date.now()
                }
            }
        });

        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error("Error updating document:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


async function GetData(req,res){
    let shortenURLs = await URL.find()

    res.json({msg:shortenURLs})
}
async function homelander(req,res){

   res.json({msg:"homelander"})
// res.render('home')
}

module.exports = {HandlerGenerateNewShortId , GetData , homelander,visitbyShortURL}