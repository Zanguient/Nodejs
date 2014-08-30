var mongoose = require('../connections/mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id_network : {type : String},
	username : {type : String, require : true, index : {unique : true}},
	email : {type : String, require : true},
	first_name : {type : String},
	last_name : {type : String}

});

var User = mongoose.model('user', userSchema);

module.exports =User