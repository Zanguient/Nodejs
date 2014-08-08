var passport = require('passport'),
	TwitterStrategy = require('passport-twitter').Strategy;

var twitterConection = function (server){
	passport.use(new TwitterStrategy({
		consumerKey : 'w5ZEevzZFiURUqN9vg7s9Cz2I',
		consumerSecret : ' RQidcmqSpMWrr33B44CDPDjGMpu0OCcIiaUKEuaXzWOXOmWsWM',
		callbackURL : 'http://localhost:3000/auth/twitter/callback'
	}, function (accessToken, RefreshToken, profile, done){
		done(null, profile);
	}));
	server.get('/auth/twitter', passport.authenticate('facebook'));

	server.get('/auth/twitter/callback', passport.authenticate('twitter', {successRedirect : '/', 
															failureRedirect : '/error'}));
};

module.exports = twitterConection;
