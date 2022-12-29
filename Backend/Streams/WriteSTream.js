const fs =require('fs')
let data = "Adfar loves Nodejs"
let writeStream = fs.createWriteStream("output.js")
writeStream.write(data,'utf-8')
writeStream.end()
writeStream.on('finish',function(){
    console.log('writing completed')
})