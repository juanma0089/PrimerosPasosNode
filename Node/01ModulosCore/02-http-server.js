"use strict";

let http = require('http');

function webServer(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<h1>Hola Node.js</h1>");
}

http
    .createServer(webServer)
    .listen(3000, 'localhost')
    console.log(`Server running at http://localhost:3000/`);
