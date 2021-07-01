let area = require('./area');
console.log(area.areaOfSquare(10, 5));

let buffer = Buffer.alloc(12);
buffer.write('WELCOME TO NODE.JS');
console.log(buffer.toString());

// blocking and non-blocking example

// example of blocking

console.log('excutes me first');
console.log('excutes me middle');
console.log('excutes me at last');

// example of Non-blocking

console.log('excutes me non-blocking first');
setTimeout(() => {
  console.log('excutes me  non-blocking  in middle');
}, 2000);
console.log('excutes me at last non-blocking');
