var express = require('express'),
	swig = require('swig'),
	passport = require('passport'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
var server = express();

swig.setDefaults({
	cache : false
})

//Config de express
server.use(bodyParser.urlencoded({
 extended : true
}));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(session({secret : 'mi clave', saveUninitialized: true, resave: true}));

//Config Passport
server.use( passport.initialize());
server.use( passport.session());

passport.serializeUser(function (user, done){
	done(null, user); //se guarda en req.user
})

passport.deserializeUser(function (user, done){
	done(null, user);
})

//Config Swig
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/app/views');

server.use(express.static('./public'));

// controllers
require('./app/controllers/home')(server);
require('./app/controllers/user')(server);
require('./app/controllers/discuss')(server);

//connections

require('./app/connections/facebook')(server);
require('./app/connections/twitter')(server);
server.listen(3000);
