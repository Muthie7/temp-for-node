//OS Module - useful for interacting with OS and server

//const {} = require("os");
const os = require("os");

//info about current user
console.log(os.userInfo());

//PC uptime in secs
console.log(`System Uptime: ${os.uptime()} secs`);

//PC details
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
