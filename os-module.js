const os = require('os')
const userName = os.userInfo;
console.log(userName());
const upTime = os.uptime;
console.log(` The time is ${upTime()} seconds `);
const machineType = os.machine;
console.log(`Machine Type = ${machineType()}`);
const OSType = os.type;
console.log(`Os Type is ${OSType}.`);
console.log(`Total Memory = ${os.totalmem} bytes.`);