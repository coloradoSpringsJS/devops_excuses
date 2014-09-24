var express = require('express');
var app = express();

//Registering route
app.get('/',function(req,res) {
    res.send('Hello World');
});

//Start the server
var server = app.listen(3001,function() {
    console.log("Express listening on port "+server.address().port);
});
