var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var assignmentSchema = new Schema({
  assignment_number:  Number,
  student_name: String,
  score:   Number,
  date_completed: { type: Date, default: Date.now }
});

var Assignment = mongoose.model('assignments', assignmentSchema);

module.exports = Assignment;
