const http = require('http')
const fs  = require('fs')
const server = http.createServer((req,res)=>{
   const data = fs.readFileSync('./sample/userapi.json','utf-8')
   const objdata = JSON.parse(data)
    if (req.url=='/'){
        res.end("This is my Home page")
    }
    else if (req.url == '/adfar'){
        res.end("Hello welcome to Adfar's page")
    }
    else if (req.url == '/deepak'){
        res.end("welcome to deepak's page")
    }
    else if(req.url=='/getdata'){
        res.end(objdata[3].name)
    }
    else {
        res.end("<h1>404 error found<h1>")
    }
})
server.listen(4000,()=>{
    console.log("listening to port 4000")
})