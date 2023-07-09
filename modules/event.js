const EventEmitter = require('events')

class Emitter extends EventEmitter{}

const emitter = new Emitter()

emitter.on('connect' , ()=>{
    console.log('Server running');
})

emitter.on('hi' , (name)=>{
    console.log('Hi my name is' + name);
})

emitter.emit('connect')
emitter.emit('hi', ' Sevinchbek')