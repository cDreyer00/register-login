const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;

const fs = require("fs");


http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./index.html", function(err, data){
        if (err) {
            res.writeHead(404);
            throw err;
        }
        res.write(data);
        res.end();
    })
}).listen(port);