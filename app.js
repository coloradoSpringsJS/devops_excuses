var express = require('express');
var homeRoutes = require('./routes/home.js');

var app = express();

//Registering route
app.get('/',homeRoutes.index);

//Start the server
var server = app.listen(3001,function() {
    console.log("Express listening on port "+server.address().port);
});
