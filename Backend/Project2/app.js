const { hashSync, compareSync } = require('bcrypt')
const express = require('express')
const userModel = require('./database')
const app = express()
const jwt = require("jsonwebtoken")
const passport = require('passport')
require('./passport')
app.use(passport.initialize())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
   return res.status(200).send({
    success :true,
    
    
   })
})
app.get('/profile',passport.authenticate('jwt',{session:false}),(req,res)=>{
    return res.status(200).send({
     success :true,
    })
 })
 app.get('/about',passport.authenticate('jwt',{session:false}),(req,res)=>{
    return res.status(200).send({
     success :true,
    })
 })
app.post('/register',(req,res)=>{
   const user =  new userModel({
    username: req.body.username,
    password: hashSync(req.body.password,10)
   })
   user.save().then(user=>{
    res.send({
        success: true,
        message:'user created successfully',
        user:{
            id:user._id,
            username:user.username
        }
    })
    .catch(err=>{
        res.send({
            success: false,
            message:'something went wrong',
            error:err
        })
    })
   })
})
app.post('/login',(req,res)=>{
    userModel.findOne({username:req.body.username}).then(user=>{
        if(!user){
            return res.status(401).send({
                success:false,
                message:"Cound not find user"
            })
        }
        if(!compareSync(req.body.password,user.password)){
            return res.status(401).send({
                success:false,
                message:"password incorrect"
            })
        }
        const payload = {
            username : user.username,
            id: user.id
        }
       const token = jwt.sign(payload,"Random string",{expiresIn : "1d"})
       return res.status(200).send({
        success: true,
        message:'Logged  in  successfully',
        token :"Bearer " + token
       })

    })
})
app.listen(5000,()=>{
    console.log("listening to port 5000")
})
