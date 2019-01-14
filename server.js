let createServer = require('cors-anywhere').createServer;
let fs = require('fs');
var path = require('path');

// Listen on a specific host via the HOST environment variable
var host = process.env.CORS_ANYWHERE_HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.CORS_ANYWHERE_PORT || 443;

let httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
  };

let cors_anywhere = createServer({httpsOptions,});

cors_anywhere.listen(port,host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
