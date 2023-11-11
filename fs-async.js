/*This is fs-Asynchronus Method in which the interpreter does not wait for the line of code which tasks long time than 
the other line of code to be interpreted.
*/




const {readFile, writeFile, read} = require('fs')
console.log('start')//First will interpreted

readFile('./hari.node/textfiles/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;

    readFile('./hari.node/textfiles/second.txt', 'utf-8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile('./hari.node/textfiles/result.txt', `Here is the text : ${first}, ${second}.`, (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Done with the task')//interpreted last
        })
    })
})
console.log('Starting a new task')//interpreted second