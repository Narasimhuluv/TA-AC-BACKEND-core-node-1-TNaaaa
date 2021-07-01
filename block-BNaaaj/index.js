console.log('Welcom to Node.Js');

let operatingSystem = require('os');
let cpus = operatingSystem.cpus().length;
console.log(cpus);

let readfiles = require('fs');
readfiles.readFile('./content.md', 'utf8', (err, content) => {
  console.log(content);
});
