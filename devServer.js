"use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
// var config = require('./make-webpack-config')('dev');
var config = require('./webpack.config.js');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

// --------your proxy----------------------
var app = express();
// proxy the request for static assets
app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});


// -----your-webpack-dev-server------------------
var server = new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/dist',
  hot: true,
  quiet: false,
  noInfo: false,
  publicPath: '/assets/',
  stats: { colors: true },
  filename: "bundle.js",
});

// run the two servers
server.listen(8081, 'localhost', function() {
  console.log('server running ...');
});
app.listen(8080);