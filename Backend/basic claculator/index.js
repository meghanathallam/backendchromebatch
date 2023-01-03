const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    return res.json("hello world")
})
app.post('/add',(req,res)=>{
    const {num1,num2}= req.body
    if(typeof num1 == "string" || typeof num2 == "string"){
        return res.json({
            status:"error",
            message: "invalid data types"
        })
    }
    const result = num1 + num2
    if(num1 >1000000 || num2 >1000000|| result >1000000){
        return res.json({
            status:"error",
            message: "overflow"
        })
    }
    return res.json({
        status:"success",
        message: "the sum of given two number",
        sum:result
    })

})
app.post("/sub",(req,res)=>{
    const {num1,num2}= req.body
    if(typeof num1 == "string" || typeof num2 == "string"){
        return res.json({
            status:"error",
            message: "invalid data types"
        })
    }
    const sub = num1 - num2
    if (sub < -1000000){
        return res.json({
            status:"error",
            message: "underflow"
        })
    }
    return res.json({
        status:"success",
        message: "the difference of given two number",
        difference : sub
    })
    
})
app.post('/multiply',(req,res)=>{
    const {num1,num2}= req.body
    if(typeof num1 == "string" || typeof num2 == "string"){
        return res.json({
            status:"error",
            message: "invalid data types"
        })
    }
    const mult = num1*num2
    if(mult > 1000000){
        return res.json({
            status : "error",
            message:"overflow"
        })
    }
    return res.json({
        status:'success',
        message : "The product of given numbers",
        result : mult
    })
})
app.post('/divide',(req,res)=>{
    const {num1,num2}= req.body
    if(typeof num1 == "string" || typeof num2 == "string"){
        return res.json({
            status:"error",
            message: "invalid data types"
        })
    }
    if ( num2 === 0){
        return res.json({
            status : 'error',
            message : "cannot divide by zero"
        })
    }
    const div = num1/num2
    if(div>1000000){
        return res.json({
            status :"error",
            message : "overflow"
        })
    }
    return res.json({
        status : "success",
        message :"tyhe division of two given number",
        reult : div
    })
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})