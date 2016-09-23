console.log('server.js sourced');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

// port decision
var port = process.env.PORT || 3030;
app.listen(port, function() {
  console.log('listening on port ', port);
});

//require a router
var indexRouter = require ('../routers/indexRouter');
app.use('/', indexRouter);

//model
var Assignment = require('/models/Assignment');

app.get('/testAssignment', function(req, res) {
  var jazzy = new Assignment({
  assignment_number: 111,
  student_name: "Jazzy",
  score: 100
});

jazzy.save(function(err) {
  if (err) {
    console.log(err);
    res.sendStatus(500);
  } else {
    console.log('jazzy saved successfully');
    res.sendStatus(201);
  }
});
});

app.get('/all', function(req,res) {
  // Assignment.find{}, function(err, AssignmentResults) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(AssignmentResults);
    }
  });
});

app.post('/create', function (req, res) {
  console.log('hit post');
console.log('request body, ', req.body);

var sentData = req.body;

var newAssignment = new Assignment({
  assignment_number: sentData.assignment_number,
  student_name: sentData.student_name,
  score: sentData.score
});

newAssignment.save(function (err) {
  if (err) {
    console.log(err);
    res.sendStatus(500);
  } else {
    console.log('new assignment saved successfully');
    res.sendStatus(201);
  }
});
});


var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
