var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var glob = require('glob');
var debug = require('debug')('app:start');

var app = module.exports = express();
app.set('view engine', 'jade');

glob.sync('./views/**/screen.js').forEach(function requireScreen(file) {
  var screenPath = path.dirname(file).replace(/^\.\/views/, '');
  debug('Initializing route and serving static files for %s', screenPath);

  //allow to serve additional static files on given path such as screen.js and screen.css
  app.use(screenPath, serveStatic(path.join(__dirname, screenPath)));
  //handle get request for given path
  app.get(screenPath, serveScreen(screenPath));
});

//handle requests to root url
debug('Initializing route and serving static files for /');
app.use('/home', serveStatic(path.join(__dirname, '/home')));
app.get('/', serveScreen('/home'));

function serveScreen(screenPath) {
  return function (req, res) {
    res.render(path.join(__dirname, screenPath, 'screen'), {
      _path: screenPath
    });
  };
}
