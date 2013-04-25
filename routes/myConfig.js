var util = require('util');
var fs = require('fs'); // require fs which includes writeFile

var color = "red";
var mycounter = 0;
var pizzaText = "rice";

exports.initialColor = function(req, res) {
	res.send(color);

	fs.appendFile("./public/textfiles/log.txt", pizzaText, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("The file was saved!");
		}
	});
};

exports.index = function(req, res){
  var defaultColor = "yellow";
  return defaultColor;
};

exports.test = function() {
	mycounter++;
	console.log("MyConfig counter is: " + mycounter);
};