

const UserModel = require('../model/userModel')

async function HandleUserSignUp(req,res){

    let {username,password,email }  =req.body;

    await UserModel.create({
        username,password,email
    })

    res.render('home')
}

async function HandleUserLogin(req,res){

    let {password,email }  = req.body;
    console.log('Email:', email);
   let user =  await UserModel.findOne({email})

   console.log(user)
   if(!user){
    res.status(402).json({msg:'invalid email or password'})
   }else{
    res.json({msg:"you've logged in"})
   }
    
}


async function signup(req,res){

    res.render('signup')
}


module.exports = {HandleUserSignUp , signup , HandleUserLogin} 