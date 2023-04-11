var http = require("http");
var log = require("./log.js");


http.createServer(function(request, response) {
    console.log(request.url);
    if (request.url == "/admin") {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("<html><body><strong>Admin Sayfası</strong></body></html>")
    } else if (request.url == "/") {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("<html><body><strong>Ana Sayfası</strong></body></html>")
    } else if (request.url == "/customers") {
        response.writeHead(200, {"Content-Type" : "application/json"});
        response.write(JSON.stringify({name : "Erne", lastname : "Felke"}));
    }
    response.end("Hello world");
}).listen(8080);

log.information("Server published!");
