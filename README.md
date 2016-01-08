# Modular Express Application

 [![Dependency Status](https://david-dm.org/martinerko/modular-express-app.svg)](https://david-dm.org/martinerko/modular-express-app)

======================

This demo shows how to build modular application using [Express](http://expressjs.com).

The application consists from multiple screens, placed in `views` directory.

Each directory represents separate screen and consists at least from following files:

  * screen.css - css dependency which will be automatically loaded when screen is opened

  * screen.js - js dependency which will be automatically loaded when screen is opened

  * screen.jade - template which will be rendered

Run ```node app.js```.

** Updates **

- 2016-01-08: Added notes how to secure Express app with SSL, please see [`HTTPS.md`](HTTPS.md)
