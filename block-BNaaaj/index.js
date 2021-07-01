console.log('Welcom to Node.Js');

let operatingSystem = require('os');
let cpus = operatingSystem.cpus().length;

let freem = operatingSystem.freemem();

let uptime = operatingSystem.uptime();
let versio = operatingSystem.version();
console.log(freem);
console.log(cpus);
console.log(uptime);
console.log(versio);

let readfiles = require('fs');
readfiles.readFile('./content.md', 'utf8', (err, content) => {
  console.log(content);
});
