var express = require('express');
var routes = require('./routes');

var app = express();

app.use('/',routes.home);

//Start the server
var server = app.listen(3001,function() {
    console.log("Express listening on port "+server.address().port);
});
