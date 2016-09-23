var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Assignments = mongoose.model('Assignments', assignmentSchema);


var assignmentSchema = new Schema({
  assignment_number:  String,
  student_name: String,
  score:   Number,
  date_completed: Date,
});
