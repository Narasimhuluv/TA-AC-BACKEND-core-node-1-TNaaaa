let http = require('http');
let file = require('fs');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Welcome to the node files</h1>');
  } else if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'text/html');
    file.readFile('./node.html', 'utf8', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  }
}
server.listen(5555, () => {
  console.log('Server port is running');
});

let filesystem = require('fs');
let http = require('http');
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.end('<h1> Welcome to the node file</h1>');
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.writeHead(201, { 'content-type': 'text/html' });
    filesystem.createReadStream('./node.html').pipe(res);
    // res.end();
  }
}

server.listen(5555, () => {
  console.log('Server Port is Running Fine');
});
