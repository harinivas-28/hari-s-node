const path = require('path');
const direct = path.dirname('/textfiles/','subfolder','text.txt');
console.log(direct)

const absolute = path.resolve(__dirname,'textfiles','text.txt')
console.log(absolute)
const baseName = path.basename(absolute)
console.log(baseName)