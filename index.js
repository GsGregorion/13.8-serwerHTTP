var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/correctUrl') {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        });

    }   else {
            response.write('<body><img src="https://bubblefootballzone.co.uk/wp-content/uploads/2014/03/3-ways-to-create-more-engaging-404-pages2.jpg"</body>')
            response.end();
        }
});

server.listen(8946);