let http = require('http');

let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  res.statusCode = 201;
  res.setHeader('content-Type', 'text/html');
  res.end('<h1>Welcome</h1>');
}
server.listen(4444);
