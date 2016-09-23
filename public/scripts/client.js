var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

// set up public folder
app.use(express.static('public'));

// resolve to path
app.get('/', function(req, res){
  res.sendFile(path.resolve('public/index.html'));
});
