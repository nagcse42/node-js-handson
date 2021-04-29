const os = require('os');

//loggedin user info
console.log(`Current user info:  `)
console.log(os.userInfo());

//loggedin user info
console.log(`Systen uptime in seconds: ${+os.uptime()} in seconds`)

const currentMachineSpec = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    hostName: os.hostname(),
    version: os.version()
}

console.log(currentMachineSpec);