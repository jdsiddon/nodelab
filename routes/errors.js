var util = require('util');

exports.nopage = function(res, req) {
	res.render('404', {title:'404'});
};