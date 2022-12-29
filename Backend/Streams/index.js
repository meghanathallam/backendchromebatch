const fs =require('fs')
let data = ''
let readStream = fs.createReadStream("input.txt")

readStream.on('data',function(chunk){
  data += chunk
})
readStream.on('end',function(){
  console.log(data)
})
readStream.on('error',function(err){
  console.log(err.stack)
})