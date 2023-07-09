const Eventemitter = require('events')
class Logger extends Eventemitter{
    log(method, require){
        this.emit("messages" , {method, require})
    }
}

module.exports = Logger