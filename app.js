var express = require('express');
var mongoose = require('./lib/mongoose');

//requiring a directory will look
//for index.js
var routes = require('./routes');

var app = express();

//Changing to app.use
//Here we "mount" a router object at the path
app.use('/',routes.homeRoutes);

//Start the server
var server = app.listen(3001,function() {
    console.log("Express listening on port "+server.address().port);
});
