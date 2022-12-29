const EventEmitter = require('events')
var eventEmitter = new EventEmitter()

eventEmitter.on('myEvent',(msg)=>{
    console.log(msg)
})
eventEmitter.on('myEvent',(msg)=>{
    console.log(msg)
})



eventEmitter.emit('myEvent','hello events')
eventEmitter.emit('myEvent','hello events')
eventEmitter.emit('myEvent','hello events')
eventEmitter.emit('myEvent','hello events')
eventEmitter.emit('myEvent','hello events')