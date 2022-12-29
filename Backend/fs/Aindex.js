const fs = require('fs')
fs.writeFile("adfar.txt","gavwefgj",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})

fs.appendFile("adfar.txt"," gardtytutvwefgj",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file crdfhfgeated")
    }
})

fs.readFile("adfar.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else if(data){
        console.log(data)
    }
})

