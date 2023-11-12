const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        //BLOCKING CODE
        for(let i =0;i<100;i++){
            for(let j=0; j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }else{
    res.end(`
    <h1>Error 404</h1>
    <h2>Oops ! Page not found ! </h2>
    `)}
})
server.listen(3000,()=>{
    console.log('Server listening to Port 3000 ....')
}) 
// If The above blocking code or the webpage linked to it reloaded it will take some time because to overcome the loop condition
//While the blocking code is reloading, if the other pages try to reload they will also take time for reload
// to be Practical
/*   RUN THE ABOVE SERVER HAVING THREE PAGES (HOME,ABOUT,ERROR)
      RUN THE 3 IN 3 DIFFERENT TABS 
        TRY TO RELOAD THE TABS WHICH ARE NOT HAVING BLOCKING CODEV--> THEY'LL RELOAD IMMEDIATLEY
        THEN 1ST RELOAD TAB HAVING BLOCKING CODE (WILL TAKE TIME) THEN TRY RELOADING THE OTHER TABS --> THE ALL PAGES WILL RELOAD AFTER THE BLOCKING CODE TAB RELOADS.
 */