var express = require('express');
var serveStatic = require('serve-static');
var https = require('https');
var path = require('path');
var config = require("./config");

var app = express();
var port = config.port;

//serve static resources
app.use(serveStatic(path.join(__dirname + '/public')));
//load all ui views
app.use(require('./views'));

if (process.env.NODE_ENV === 'production') {
  https.createServer(config.sslOptions, app).listen(port);
  console.log('HTTPS listening on port %s', port);
} else {
  app.listen(port);
  console.log('HTTP listening on port %s', port);
}
