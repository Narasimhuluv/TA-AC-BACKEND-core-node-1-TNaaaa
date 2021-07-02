first; //
let http = require('http');

http
  .createServer((req, res) => {
    console.log(req, res);
  })
  .listen(5000, 'localhost');

second; //

let http = require('http');
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req, res);
}

server.listen(5100, () => {
  console.log('My First Server in NodeJs');
});

third; //

let http = require('http');
let server = http.createServer(handleRequest);
let file = require('fs');
function handleRequest(req, res) {
  file.readFile('./index.md', (err, content) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
  });
}
server.listen(5555, () => {
  console.log('server is running fine');
});

Fourth; //

let http = require('http');
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.method, req.url);
  res.setHeader('Content-Type', 'text/plain');
  res.end('OK');
}

server.listen(5566, () => {
  console.log('listening Server');
});

Five; //

let http = require('http');
let file = require('fs');
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.method, req.url);
  file.readFile('./index.md', (err, content) => {
    res.setHeader('Content-Type', 'text/plain');
    console.log(err);
    res.end(content);
  });
}
server.listen(7000, () => {
  console.log('server listening on port 7000');
});

Six; //

let http = require('http');
let file = require('fs');
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  res.statusCode = 202;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h2> Welcome</h1>');
}
server.listen(3333, () => {
  console.log('3333 port is runnin');
});

Seven; //

let http = require('http');
let server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h3> Welcome to altCampus</h3>');
});
server.listen(8000, () => {
  console.log('8000 port is running fine');
});

Eight; //

let http = require('http');
let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h3> Welcome to altCampus</h3>');
});
server.listen(8000, () => {
  console.log('8000 port is running fine');
});

Nine; //

let http = require('http');
let url = require('url');
let server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/')
    res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end({ success: true, message: 'Welcome to Nodejs' });
});

server.listen(8888, () => {
  console.log('8888  is running fine');
});

Ten; //

let http = require('http');
let server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2> Get the data </h2>');
  } else if (req.method === 'POST' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2> Posted for the First time</h2>');
  }
});
server.listen(5050, () => {
  console.log('sucessfully running port 5050');
});

eleven; //

let http = require('http');
let server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/palin' });
    res.end('Narasimhulu Vasam');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader(404, { 'Content-Type': 'text/html' });
    res.end('<h2> Narasimhulu Vasam</h2>');
  }
});
server.listen(2345, () => {
  console.log('2345 server port is running fine');
});

let http = require('http');
const path = require('path');
let url = require('url');
let urlString = `http:github.com/users?email=nodeserver@gmail.com`;
let server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  let parsedUrl = url.parse(urlString);
  let pathName = parsedUrl.pathname;
  if (req.method === 'GET' && pathName === '/') {
    res.setHeader('Content-Type', 'text/plain');
    console.log(pathName);
    res.end(pathName.query);
  }
});
server.listen(1000, () => {
  console.log('1000 server is running fine');
});
