let urlstring =
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male';
var url = require('url');
const parsedUrl = url.parse(urlstring, true);
console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.path);

let googleurl = `https://google.com/developers?name=google`;
var url = require('url');
let parseUrl = url.parse(googleurl);
console.log(parseUrl);
