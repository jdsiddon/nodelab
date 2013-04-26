var util = require('util');
var fs = require('fs'); // require fs which includes writeFile

var color = "red";
var mycounter = 0;
var pizzaText = "rice";

exports.initialColor = function(req, res) {
	res.send(color);
};

exports.index = function(req, res){
  var defaultColor = "yellow";
  return defaultColor;
};

exports.test = function() {
	mycounter++;
	console.log("MyConfig counter is: " + mycounter);
};