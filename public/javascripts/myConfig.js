$(document).ready(function() { //on document load
	$.get('initialColor', function(data,textStatus,jqXHR) { //use the "exports.test" method in myConfig.js
		$("#coloredBox").addClass(data);
	});
});