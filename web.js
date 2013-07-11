var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var out = fs.readFileSync('index.html','utf-8');
var buf = new Buffer(out);
var str = buf.toString('utf-8',0,buf.lenght - 1);

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
