var http = require('http');

function get(url, callback) {
	http.get(url, function(res) {
		var content = '';
		res.on('data', function (chunk) {
			content += chunk;
		}).on('end', function() {
			callback(content);
		});
	});
};

exports.get = get;
