
const {getUser} = require('../services/auth')

function restrictedUserLoggedinOnly(req,res,next){

    let userUid = req.cookies?.uid;
    if(!userUid) return res.redirect('/ejs/home')
    let user = getUser(userUid)

    if(!user) return res.redirect('/ejs/home')
    req.user = user;
   
    next();
}

module.exports = {restrictedUserLoggedinOnly}