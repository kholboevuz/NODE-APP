const http  = require('http');
const multiple = require('./math')
const uuid =  require('uuid') 
const fs = require('fs')
const server = http.createServer((req, res)=>{
if(req.url === "/"){
    res.end(
        `
        <html>
        <head><title>Send message</title></head>
        <body>
        <form action="/message"  method="POST">
        <input type="text" name="message">
        <button type="submit">Send</button>
        </form>
        </body>
        </html>
        `
    )
}
if(req.url === '/message' && req.method === 'POST' ){
    const body = []
    req.on('data' , (chunk)=>{
        console.log(chunk);
        body.push(chunk)
    })
    req.on('end' , ()=>{
        const parseBody = Buffer.concat(body).toString()
        console.log(parseBody);
        fs.writeFileSync('message.txt', parseBody.split('=')[1])
    })
res.end()

}

})
// console.log(uuid.v4());
// console.log(multiple(5, 8));
const PORT = process.env.PORT || 4000
server.listen(PORT, ()=>{
    console.log('Server running on PORT:' + PORT);
})