var homeController = function (server){
	console.log('homeController LISTO');

	server.route('/')

		.get(function (req, res){
			if (req.user){
				if (req.user.provider == 'facebook')
				{
					var name = req.user._json.first_name;
					var url_foto = "http://graph.facebook.com/"+ req.user.id + "/picture"
			    }
				if (req.user.provider == 'twitter'){
					var name = req.user.username;
					var url_foto = req.user.photos[0].value;
				}
				res.render("home/index",{
					user : name,
					url_foto : url_foto
				});
			}
			else{
				res.render('home/index');
			}
		});
};

module.exports = homeController
