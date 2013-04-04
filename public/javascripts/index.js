$("#submitButton").click(function() {
//	$('#uptodate').removeClass('bad').addClass('good'); //change class
	var data = $("#yesNo").serialize();
	console.log("data: " + data);

	$.post("update", data, function(data,textStatus,jqXHR) {
		console.log("data returned from node in upper: " + data);		
		$("#updateResult").show('slow', function() {
		    $(this).text(data);
		});
	});
});
/*
$(document).ready(function() {
	console.log("GET");
	var data = $(this).attr("value");
	$.get("getColor", {color:data}, function(data, textStatus, jqXHR) {
		console.log("data is: " + data);
		console.log("textStatus is: " + textStatus);
		console.log("jqXHR is: " + jqXHR);
	});
});
*/

$(".cookie").click(function() {
	console.log(x);
//	res.cookie('cart', { items: [1,2,3] });
	console.log("Clicked Cookie!");
	
});



$(".btn.color").click(function() {
	
	var data = $(this).attr("value");
	$("#coloredBox").removeClass('yellow blue');
	
	$.post("changeColor", {color:data}, function(data,textStatus,jqXHR) {
		switch(data.color) {
			case "yellow":
				console.log("color is " + data.color);
				$("#coloredBox").addClass('yellow');
				console.log(app.locals.title);
			break;
			
			case "blue":
				console.log("color is " + data.color);
				$("#coloredBox").addClass('blue');
			break;
			
			default:
				console.log("no colors to remove!");
			break;
		}	
	});
	/*$.get("changeColor", {color:data}, function(data, textStatus, jqXHR) {
		console.log("data is: " + data);
		console.log("textStatus is: " + textStatus);
		console.log("jqXHR is: " + jqXHR);
	})*/
});























/*
$("input[value=no]").click(function() {
	//console.log(" No");
	$('#uptodate').removeClass('good').addClass('bad'); //change class
	//var text = "input[value=no]";
	$.post("updateNo", $("#uptodate").serialize()).done(function(data) {
		console.log(data);
		$("#updateResult").show('slow', function() {
		    $(this).text(data);
		});
	});
	
});

  */
  //$.post("addUser", justinTest);
  //$.get("addUser", res);
//});


/*
$('#applyUpdates').click(function() {
  if("input[type=yes]") {
	console.log(" Yes");
	$('#uptodate').addClass("good");
  }
  if("input[type=no]") {
	console.log(" No");
	alert("ignoring updates");
  }
});
*/