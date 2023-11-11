const http = require('http')
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to the home Page.')
  }
  if(req.url === '/about'){
    res.end('Author: Harinivas')
  }
  res.end(`
    <h1>Oops!!</h1>
    <p>Can't Find the page you are searching for</p>
    <a href="/">Click Here to visit Home Page</a>
    `)
})
 server.listen(3000)