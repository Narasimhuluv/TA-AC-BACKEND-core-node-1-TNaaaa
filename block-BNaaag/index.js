let fileSy = require('fs');
let fileSyAsync = require('fs');

fileSy.readFile('./content.md', (err, content) => {
  console.log(err, content.toString());
});

let results = fileSyAsync.readFileSync('./content.md', 'utf-8');
console.log(results);
let buffer1 = Buffer.alloc(10);
console.log(buffer1);
buffer1.write('Welcome to Buffer');
console.log(buffer1.toString());
