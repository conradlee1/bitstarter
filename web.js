var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var mybuf = fs.readFileSync('index.html');
var mybuf2 = mybuf.toString();
  response.send(mybuf2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
