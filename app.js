var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var swig = require('swig');

var mongoose = require('./lib/mongoose');

//requiring a directory will look
//for index.js
var routes = require('./routes');

var app = express();
//Adding template rendering
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//Adding in static middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//Changing to app.use
//Here we "mount" a router object at the path
app.use('/',routes.homeRoutes);
app.use('/excuse',routes.excuseRoutes);

//Start the server
var server = app.listen(3001,function() {
    console.log("Express listening on port "+server.address().port);
});
