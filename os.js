const { log } = require('console')
const os = require('os')

// info about current user
const user = os.uptime()
console.log(user)


// method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
    platform: os.platform(),
    archi: os.arch(),
    direc: os.tmpdir(),
    host: os.hostname(),
    user: os.userInfo(),
    user1: os.cpus(),
    para: os.availableParallelism(),
    eol1: os.EOL,
    
}

console.log(currentOs);