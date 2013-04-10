
/*
 * GET home page.
 */
var util = require('util');
var cfg = require('./myConfig'); // set myConfig.js file to the variable cfg for use in this file

exports.index = function(req, res){
  cfg.test(); //my test function Adam helped me wit
  var defaultColor = cfg.index();
  console.log("coming from index.js " + defaultColor);
  res.render('index', { title: 'Express'});
};

exports.test = function(req, res){
  cfg.test();
  res.render('test', { title: 'Bobydalfd'});
};

exports.bob = function(req, res){
  res.render('bob', { title: 'bob page for site'});
};



exports.addUser = function(req, res) {
	console.log("Name is: " + req.body.justinTest);
	console.log("Fav food is: " + req.body.food);
	console.log("Justin " + req.justinTest);
 	console.log(util.inspect(req.body));
	res.send("Yo Yo");
};

exports.update = function(req, res) {
	if(req.body.update === "yes") {
		console.log("req.body.update: " + req.body.update);
		res.send(req.body.update.toUpperCase());
	}
	else {
		console.log("req.body.update is no: " + req.body.update);
	}
};

exports.changeColor = function(req, res) {
	var newColor = req.body.color;
	console.log(newColor);
	res.send(newColor);
};

exports.getColor = function(req, res) {
	console.log(req);
	res.json(boxColor);
	console.log(configTest);
};


exports.setcookie = function(req, res) {
	
};

/*
exports.updateNo = function(req, res) {
	var myObject = {};
	res.send("Ignoring update for now");
  	//res.json({"reply":"sweet!"});
}*/