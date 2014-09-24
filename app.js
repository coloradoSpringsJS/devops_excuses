var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var swig = require('swig');

var mongoose = require('./lib/mongoose');

//requiring a directory will look
//for index.js
var routes = require('./routes');

var app = express();

//Adding in static middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Adding template rendering
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//Changing to app.use
//Here we "mount" a router object at the path
app.use('/',routes.homeRoutes);

//Start the server
var server = app.listen(3001,function() {
    console.log("Express listening on port "+server.address().port);
});
