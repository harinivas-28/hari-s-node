const {readFile,writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    const first = await readFile('./textfiles/first.txt','utf-8')
    const second = await readFile('./textfiles/second.txt','utf-8')
    try {
        writeFile('./textfiles/result-await.txt',`THE NODE IS COMPLEXIVE AND FLEXIBLE : ${first} ${second}
        `,{flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()


// ALTERNATE
// const path = require('path')
// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
// })
// }
// getText('./textfiles/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err))