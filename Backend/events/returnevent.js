const EventEmitter = require('events')
var eventEmitter = new EventEmitter()
var function1 = (msg)=>{
    console.log("message from function1 : " + msg)
}
var function2 = (msg)=>{
    console.log("message from function2 : " + msg)
}
eventEmitter.addListener('myEvent',function1)
eventEmitter.prependListener('myEvent',function2)
// eventEmitter.prependOnceListener('myEvent',function2)


console.log(eventEmitter.listeners('myEvent'))
console.log(eventEmitter.listenerCount('myEvent'))
eventEmitter.emit('myEvent','Adfar Rasheed')