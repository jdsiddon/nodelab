
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , routes = require('./routes')
  , user = require('./routes/user')
  , path = require('path');



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
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/test', routes.test); //test route
app.get('/bob', routes.bob); //add
app.get('/getColor', routes.getColor);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
//var io = require('socket.io').listen(server); //added

app.post('/addUser', routes.addUser);
app.post('/update', routes.update);
app.post('/changeColor', routes.changeColor);

app.get('/cookieset', function (req, res) {
    res.cookie('bar', 'baz');
});

app.get('/cookiesend', function (req, res) {
    res.send(req.cookies.bar);
});



