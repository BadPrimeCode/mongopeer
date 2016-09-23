var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Assignment = mongoose.model('assignments', assignmentSchema);


var assignmentSchema = new Schema({
  assignment_number:  Number,
  student_name: String,
  score:   Number,
  date_completed: { type: Date, default: Date.now }
});

module.exports = Assignment;
