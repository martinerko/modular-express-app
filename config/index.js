var fs = require('fs');
var path = require('path');

// dynamically load the config json file
var env = process.env.NODE_ENV || 'development';
var config = require('./' + env + '.json');

if (env === 'production') {
  config.sslOptions = {
    key: fs.readFileSync(path.join(__dirname, './keys/myapp-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, './keys/myapp-cert.pem'))
  };
}

module.exports = config;
