const { readFile } = require('fs')
console.log('Starting a new Task')
// Reading FILE PATH !!!
readFile('./textfiles/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Done with the task')
})
console.log('Starting next Task')