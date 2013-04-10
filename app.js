
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , routes = require('./routes')
  , user = require('./routes/user')
  , cfg = require('./routes/myConfig')
  , errors = require('./routes/errors')
  , path = require('path');


// Set the silly counter to 1.
cfg.test(); // whee!

var boxColor = {};
boxColor.color = "yellow";

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(function(req, res, next) {
	res.status(404);
	if (req.accepts('html')) {
		res.render('404', {url: req.url, 
						   title: 'Sorry we dont know where this page is!',
						   body: 'Please try again'});
	}
  });

});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//Routes
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/test', routes.test); //test route
app.get('/bob', routes.bob); //add
//app.get('/404', ) //why do I not need a route?

//app.get('/getColor', routes.getColor);

app.get('/initialColor', cfg.initialColor); //setting initial color onload
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.post('/addUser', routes.addUser);
app.post('/update', routes.update);
app.post('/changeColor', routes.changeColor);




app.locals({
  color: 'yellow'
});


