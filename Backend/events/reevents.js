const EventEmitter = require('events')
var eventEmitter = new EventEmitter()

var function1 = (msg)=>{
    console.log("message from function1 : " + msg)
}

var function2 = (msg)=>{
    console.log("message from function2 : " + msg)
}

eventEmitter.on('myEvent',function1)
eventEmitter.on('myEvent',function2)
eventEmitter.on('myEvent',function2)

eventEmitter.removeAllListeners('myEvent')
// eventEmitter.removeListener('myEvent')


eventEmitter.emit('myEvent','Adfar Rasheed')


