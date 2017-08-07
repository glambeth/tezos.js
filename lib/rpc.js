var restify = require('restify-client');

module.exports = function(provider) {
	var client = restify.createJsonClient({
		host: provider,
		version: '*'
	});

	function getRequest(endpoint, data) {
		var p = new Promise(function(resolve, reject) {
			var request = {
				path: endpoint,
				body: data
			}; 
			client.post(request, function(err, response) {
				if (err) {
					reject(err);
				}
				resolve(response);
			});
		});
	}

	return {
		
	}
};