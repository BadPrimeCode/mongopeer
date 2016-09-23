var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Assignment = mongoose.model('assignments', assignmentSchema);


var assignmentSchema = new Schema({
  assignment_number:  String,
  student_name: String,
  score:   Number,
  date_completed: Date,
});

module.exports = Assignment;
