var mongoose = require('../connections/mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	user : {type : Schema.Types.ObjectId, red : 'user'},
	title : {type : String},
	content : {type : String}
});

var Question = mongoose.model('question', questionSchema);

module.exports = Question;