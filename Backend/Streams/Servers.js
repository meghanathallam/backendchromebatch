const fs = require('fs')
const http = require('http')
const  server = http.createServer((req,res)=>{
    // fs.readFile('input.txt',(err,data)=>{
    //      if(err){
    //         console.log(err)
    //      }
    //      res.end(data.toString())
    // })
    const rstream = fs.createReadStream('input.txt')
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstream.on('end',()=>{
    //     res.end()
    // })
    rstream.pipe(res)
})
server.listen(8000)

