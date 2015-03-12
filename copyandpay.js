var http = require('https');
var querystring = require('querystring');

function prepareCheckout(callback) {
	var postParameters = querystring.stringify( {
		'authentication.userId' : '8a8294184b4f2868014b4f86f767015d',
		'authentication.password' : 'F8T7N4PD',
		'authentication.entityId' : '8a8294184b4f2868014b4f87bf160173',
		'paymentType' : 'DB',
		'amount' : '50.99',
		'currency' : 'EUR'
	});
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: '/v1/checkouts',
		method: 'POST',
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		  'Content-Length': postParameters.length
		}
	};
	var postRequest = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			jsonRes = JSON.parse(chunk);
			return callback(jsonRes.id);
		});
	});
	postRequest.write(postParameters);
	postRequest.end();
	  
}
  
prepareCheckout(function(checkoutId) {
	console.log(checkoutId);
});
  
