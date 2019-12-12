var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World 12345678123123\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
