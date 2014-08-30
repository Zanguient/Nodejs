var User = require('../models/user');
var userController = function (server){
		
		server.route('/logout')
			
			.get(function (req, res){
				req.logout();
				res.redirect('/');
				});
		server.route('/extra-data')
 
			.get(function (req, res){
				User.findOne({ id_network : req.user.id}, function (err, user){
					if (user){
						res.redirect('/');
						return;
					}
					else{
						res.render('user/extra_data');
					}
				});
				
			})
			.post(function (req, res){
				var username = req.body.username;
				var email = req.body.email;
				if (req.user.provider == 'facebook'){
					var user = new User({
						id_network : req.user.id,
						username : username,
						email : email,
						first_name : req.user.name.giveName,
						last_name : req.user.name.familyName
				});
				user.save(function (err){
					if(err){
						console.log("error");
						return;
					}
				});
			}
				if (req.user.provider == 'twitter'){
					var user = new User({
						id_network : req.user.id,
						username : username,
						email : email,
						first_name : req.user.displayName,
					});
					user.save(function (err){
						if(err){
							console.log("error");
							return;
						}
					});

				}
				res.redirect('/');
			});
	};

module.exports = userController;
