var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var debug = require('debug')('app:start');
var port = process.env.PORT || 3000;

var app = express();
app.use(serveStatic(path.join(__dirname + '/public')));
//load all ui views
app.use(require('./views'));
app.listen(port);

debug('listening on port %s', port);
