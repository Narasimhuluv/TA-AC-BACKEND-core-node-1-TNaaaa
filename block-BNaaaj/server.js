let url = require('url');
let UrlString = `https://airindia.com/fares/calculate?from=delhi&to=detroit`;
let parsedUrl = url.parse(UrlString);
console.log(parsedUrl);

console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
