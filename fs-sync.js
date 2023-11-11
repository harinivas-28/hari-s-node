/*This is fs Synchronus file where interpreter interpretes code line by line even if the code to be interpreted 
takes long time than the other line of code
*/





const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./hari.node/textfiles/first.txt', 'utf-8');
const second = readFileSync('./hari.node/textfiles/second.txt', 'utf-8');

writeFileSync('./hari.node/textfiles/result.txt', `Here is the result ${first},${second}`, {flag: 'a'});
//Flag a is used to duplicate and add the existing text present in the same file...

console.log('Task Completed');
console.log('Starting a new Task');