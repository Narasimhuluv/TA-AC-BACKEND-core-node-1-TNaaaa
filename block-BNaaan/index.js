let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(request, response) {
  console.log(request.headers, request.methods, request.url);
  response.end('WELCOME');
}
server.listen(3000, () => {
  console.log('Port is Running  Now');
});
