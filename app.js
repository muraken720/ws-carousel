"use strict";

var express = require('express.io');

var app = express();

app.http().io();

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
});

// Broadcast the slide event on send route.
app.io.route('send', function(req) {
  console.log(req.data);
  req.io.broadcast('slide', req.data);
});

// Send client html.
app.get('/', function(req, res) {
  res.sendfile(__dirname + 'index.html')
});

app.listen(7076);
