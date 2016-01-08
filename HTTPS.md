# Running Express app over HTTPS

This part demonstrates how to secure Express app with self signed certificate.

## Generating own SSL certificate

Run the following command to generate a pair of public/private key.
We are going to generate a pair of RSA key of 4096 bits using following command:

`openssl genrsa -out myapp-key.pem 4096`

Now we need to generate the certificate request from previously created private key using following command:

`openssl req -new -key myapp-key.pem -out myapp-certrequest.csr`

Once we generated the certificate request we can use it to generate a self signed public certificate (signed with our private key) using following command:

`openssl x509 -req -in myapp-certrequest.csr -signkey myapp-key.pem -out myapp-cert.pem`

## Setting up a HTTPS Express server

To secure Express app we will use `npm https` module to create a server with additional parameters, such as key and certificate as follows:

```
    var https = require('https');
    var express = require('express');
    var app = express();

    https.createServer({
      key: fs.readFileSync('myapp-key.pem'),
      cert: fs.readFileSync('myapp-cert.pem')
    }, app).listen(4443);
```

### References
- [OpenSSL](https://www.openssl.org/docs/manmaster/apps/req.html)
- [An Introduction to the OpenSSL command line tool](http://users.dcc.uchile.cl/~pcamacho/tutorial/crypto/openssl/openssl_intro.html)
