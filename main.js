var http = require("http");

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello Word\n');

}).listen(8082);

console.log('server started at port 8082')
