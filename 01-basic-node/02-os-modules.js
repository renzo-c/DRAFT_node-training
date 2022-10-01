const os = require("os");

// Info about current user
console.log(os.userInfo());

// System uptime
const upTimeSeconds = os.uptime();
const upTimeHours = upTimeSeconds / 60 / 60;

console.log(
  `The system uptime is ${upTimeSeconds} seconds, or ${upTimeHours} hours`
);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1024 / 1024,
  freeMem: os.freemem() / 1024 / 1024,
};

console.log({ currentOS });
