var Question = require('../models/question');
var User = require('../models/user');
var logged = require('../middlewares/logged'),
	getUser = require('../middlewares/getuser');

var discussController = function (server){

	server.route('/guardar-pregunta')
		.post(logged, getUser, function (req, res){

			var question = new Question({
				user : req.user,
				title : req.body.title,
				content : req.body.content,
			});
			question.save(function(err){
				if (err){
					console.log("error");
					return;
					}
			});
			res.redirect('/');
		});
};
module.exports = discussController