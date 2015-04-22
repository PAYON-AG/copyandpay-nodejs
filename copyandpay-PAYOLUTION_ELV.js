var http = require('https');
var querystring = require('querystring');

function prepareCheckout(callback) {
	var postParameters = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'paymentType' : 'PA',
		'amount' : '10.00',
		'currency' : 'EUR',
		'customer.surname' : 'Jones',
		'customer.givenName' : 'Jane',
		'customer.birthDate' : '1970-01-01',
		'billing.city' : 'Test',
		'billing.country' : 'DE',
		'billing.street1' : '123 Test Street',
		'billing.postcode' : 'TE1 2ST',
		'customer.email' : 'test@test.com',
		'customer.phone' : '1234567890',
		'customer.ip' : '123.123.123.123',
		'customParameters[PAYOLUTION_ITEM_PRICE_1]' : '2.00',
		'customParameters[PAYOLUTION_ITEM_DESCR_1]' : 'Test item #1',
		'customParameters[PAYOLUTION_ITEM_PRICE_1]' : '3.00',
		'customParameters[PAYOLUTION_ITEM_DESCR_1]' : 'Test item #2',
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