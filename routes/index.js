
/*
 * GET home page.
 */
var util = require('util');

exports.index = function(req, res){
  res.render('index', { title: 'Express', defaultColor: 'blue'});
};

exports.test = function(req, res){
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
  	//res.json({"reply":"sweet!"});
};

exports.update = function(req, res) {
	if(req.body.update === "yes") {
		console.log("req.body.update: " + req.body.update);
		res.send(req.body.update.toUpperCase());
		//res.json({"reply":"sweet"});
	}
	else {
		console.log("req.body.update is no: " + req.body.update);
	}
};






exports.changeColor = function(req, res) {
	console.log(req.body.color);
	//console.log(data.color);
	res.send(req.body);
//	console.log(boxColor.color);
};

exports.getColor = function(req, res) {
	console.log(req);
	res.json(boxColor);
};




/*
exports.updateNo = function(req, res) {
	var myObject = {};
	res.send("Ignoring update for now");
  	//res.json({"reply":"sweet!"});
}*/