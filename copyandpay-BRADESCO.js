var http = require('https');
var querystring = require('querystring');

function prepareCheckout(callback) {
	var postParameters = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'paymentType' : 'PA',
		'amount' : '10.00',
		'currency' : 'BRL',
		'customParameters[BRADESCO_cpfsacado]' : '11111111111',
		'billing.country' : 'BR',
		'billing.postcode' : '12345678',
		'billing.state' : 'SP',
		'billing.street1' : 'Amazonstda',
		'billing.city' : 'Brasilia',
		'customer.givenName' : 'Braziliano',
		'customer.surname' : 'Babtiste',
		'testMode' : 'EXTERNAL'
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