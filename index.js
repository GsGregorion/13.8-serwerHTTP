var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    
    if (request.method === 'GET' && request.url === '/correctUrl') {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.write(data);
            response.end();
        });

    }   else {
            fs.readFile('./error.jpg', (err, data) => {
                if (err) throw err;
                response.writeHead(200, {'Content-Type': 'image/jpeg'});
                response.write(data);
                response.end();
            });
        }
});

server.listen(8946);