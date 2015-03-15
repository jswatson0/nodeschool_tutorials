//var static = require('node-static');
//
//var fileServer = new static.Server('./public');
//
//require('http').createServer(function (request, response) {
//  request.addListener('end', function () {
//    fileServer.serveFile('/books.html', request, response);
//  }).resume();
//}).listen(8080);

//var http = require('http'),
//  static = require('node-static');
//
//var folder = new(static.Server)('/public');
//
//http.createServer(function (req, res) {
//  req.addListener('end', function () {
//    folder.serve(req, res);
//  });
//}).listen(8080);

var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./public');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    //
    // Serve files!
    //
    file.serve(request, response);
  }).resume();
}).listen(8080);