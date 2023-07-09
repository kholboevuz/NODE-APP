const Logger = require("./logger")

const logger = new Logger()

logger.on('messages' , data=>{
    console.log(data);
})

logger.log("POST", "/user/login")
logger.log("GET", "/user/login/profiles")
logger.log("DELETE", "/user/login/profiles/13")