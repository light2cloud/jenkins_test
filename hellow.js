var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World Im wanghan---------\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:3000/');
