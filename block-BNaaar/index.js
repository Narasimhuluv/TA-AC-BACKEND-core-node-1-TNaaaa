let http = require('http');
let server = http.createServer(handleRequest);
let url = require('url');

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathName = parsedUrl.pathname;
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('content-type', 'text/plain');
    res.end(`Welcome to Index file`);
  } else if (req.method === 'GET' && pathName === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(`<h2> about page</h2>`);
  } else if (req.method === 'POST' && pathName === '/about') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end('{message: this is a post request}');
  } else {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h2> Page not found</h2>');
  }
}
server.listen(5000, () => {
  console.log('server port in running');
});
