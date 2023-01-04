const express = require('express')
const app = express()
const users =[
    {
        id:1,
        name:'Adfar'
    },
    {
        id:2,
        name:'Piyush'
    },
    {
        id:3,
        name:'Piyusmnch'
    },
    {
        id:4,
        name:'Piyfuyikush'
    },
    {
        id:5,
        name:'Pxfghiyush'
    },
    {
        id:6,
        name:'Piychush'
    },
    {
        id:7,
        name:'Piyuxghsh'
    },
    {
        id:8,
        name:'Piyxghzsush'
    },
    {
        id:9,
        name:'Piyuxsh'
    },
    {
        id:10,
        name:'Piyxgbush'
    }
]
app.get('/users',(req,res)=>{

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const startIndex = (page - 1)*limit
    const endIndex = page * limit
    const results ={}
    if (startIndex > 0){
        results.previous ={
            page : page - 1,
            limit: limit
        }
    }
    if(endIndex < users.length){
        results.next ={
            page : page + 1,
            limit: limit
        }
    }
    
    results.result = users.slice(startIndex,endIndex)
    res.json(results)
})
app.listen(3000,()=>{
    console.log("listening")
})

// http://localhost:3000/users?page=1&limit=3