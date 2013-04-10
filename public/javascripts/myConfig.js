$(document).ready(function() { //on document load
	console.log("HELLO!"); //make sure it works
	$.get('initialColor', function(data,textStatus,jqXHR) { //use the "exports.test" method in myConfig.js
		$("#coloredBox").addClass(data);
	});
});