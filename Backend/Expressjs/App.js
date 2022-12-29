var express = require('express')
var app = express()
var port = 3000
// const path = require('path')

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    var data = {
        name:'adfar',
        hobbies : ['playing chess','react','coding','music']
    }
    res.render('home',{data:data})
})








// app.set("view engine","hbs")
// app.get("/",(req,res)=>{
//     res.render("index",{
//         name : "Adfaxtyr",
//     })
// })
// app.get('/demo',(req,res)=>{
//     var demo ={
//         name:'Adfar',
//     age:'25'
// }
//     res.render('demo',{demo : demo})
// })
// app.get('/skills',(req,res)=>{
//     var skills = {
//         name :'Adfar',
//         skills : ['HTML','CSS','React']
//     }
//     res.render('skills',{skills:skills})
// })
// app.use('/',express.static(
//     path.join(__dirname,"../public")
// ))
// app.use('/about',express.static(
//     path.join(__dirname,"../public/")
// ))
// app.get('/',(req,res)=>{
//     res.send("randomness")
// })
// app.get('/adfar',(req,res)=>{
//     res.send("adfar")
// })
// app.get('/sandeep',(req,res)=>{
//     res.send("Sandeep Page")
// })
app.listen(port)