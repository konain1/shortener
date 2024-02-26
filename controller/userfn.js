

const UserModel = require('../model/userModel')
const URL = require('../model/urlmodel')


async function HandleUserSignUp(req,res){

    let {username,password,email }  =req.body;

    await UserModel.create({
        username,password,email
    })

    res.render('home')
}

async function HandleUserLogin(req, res) {
    let {email,password} = req.body;

    console.log('Email:', email);

    let allUsers = await URL.find();
    let user = await UserModel.findOne({ email,password });

    if (!user) {
        res.status(402).json({ msg: 'invalid email or password' });
    } else {
        res.render('login', { allUsers, currentUser: { username: user.username, email: user.email } });
    }
}

async function afterLogin(req,res){
    let email   = req.body.email;

    console.log('Email:', email);
   let user =  await UserModel.findOne({email})
    res.json({msg: `you logged in`})
}

async function signup(req,res){

    
    res.render('signup')
}


module.exports = {HandleUserSignUp , signup , HandleUserLogin ,afterLogin} 