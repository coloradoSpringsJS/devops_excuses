var express = require('express');
var homeRoutes = require('./routes/home');

var app = express();

app.use('/',homeRoutes);

//Start the server
var server = app.listen(3001,function() {
    console.log("Express listening on port "+server.address().port);
});
