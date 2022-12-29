var http = require('http')
//create a server
http.createServer((request,response)=>{
    response.write('Heelo Adffar')
    response.write('Heelo Adffar')
    response.write('Heelo Adffar')
    response.write('Heelo Adffar')
    response.end()
}).listen(8000)