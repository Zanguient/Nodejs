var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy;

var facebookConection = function (server){
	passport.use(new FacebookStrategy({
		clientID : '329319980556783',
		clientSecret : '1a36020090b0241476114ec952021f1b',
		callbackURL : 'http://localhost:3000/auth/facebook/callback'
	}, function (accessToken, RefreshToken, profile, done){
		done(null, profile);
	}));
	server.get('/auth/facebook', passport.authenticate('facebook'));

	server.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect : '/', 
															failureRedirect : '/error'}));
};

module.exports = facebookConection;