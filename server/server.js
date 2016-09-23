console.log('server.js sourced');

var express = require('express');
var app = express();
// var path = require('path');
var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({extended: false});

//require a router
var indexRouter = require ('../routers/indexRouter');
app.use('/', indexRouter);

// port decision
var port = process.env.PORT || 3030;
app.listen(port, function() {
  console.log('listening on port whatever');
});

// set up public folder
// app.use(express.static('public'));

// // resolve to path
// app.get('/', function(req, res){
//   res.sendFile(path.resolve('public/index.html'));
// });


var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
