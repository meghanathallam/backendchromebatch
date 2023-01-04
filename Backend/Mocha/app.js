const express = require('express')
const app = express()
app.get('/',(req,res)=>{
res.send("ADfar")
})
app.listen(3000,()=>{
    console.log("Listening to our port")
})