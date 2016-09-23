var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Assignment = require('../public/models/assignments.js');

router.get('/', function(req,res) {
  // Assignment.find{}, function(err, AssignmentResults) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(AssignmentResults);
    }
  // });
});

router.post('/create', function (req, res) {
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

// var path = require('path');
//
// // resolve to path
// router.get('/', function(req, res){
//   res.sendFile(path.resolve('public/index.html'));
// });

module.exports = router;
