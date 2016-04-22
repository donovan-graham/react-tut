var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var app = express();

app.use('/js', proxy(url.parse('http://localhost:8080/js')));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});