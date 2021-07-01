let fileSy = require('fs');

fileSy.readFile('./content.md', (err, content) => {
  console.log(err, content.toString());
});

let buffer1 = Buffer.alloc(10);
console.log(buffer1);
buffer1.write('Welcome to Buffer');
console.log(buffer1.toString());
