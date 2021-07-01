let http = require('http');
let server = http.createServer(handleRequest);

server.listen(4000, () => {
  console.log('node script_file.js');
});

function handleRequest(request, response) {
  response.end('Welcome to end');
}
