const http = require('http')
const server = http.createServer((req,res)=>{
    console.log('Request Server !!')
    res.end('Hello World')
})
server.listen(3000,()=>{
    console.log('Server listening to Local Port 3000 ....')
})
