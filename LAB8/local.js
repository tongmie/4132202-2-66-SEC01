var http = require("http");

http
    .createServer(function (req, res ) {
      res.writHead(200, { "Content-type": "text/plain"});
      res.write("Hello world!");
      res.end();
    })
    .listen(3000);

