var http = require('https');
var querystring = require('querystring');

function prepareCheckout(callback) {
	var postParameters = querystring.stringify( {
		'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699a3cf15d1',
		'paymentType' : 'PA',
		'amount' : '10.00',
		'currency' : 'SEK',
		'paymentType' : 'PA',
		'amount' : '10.00',
		'currency' : 'SEK',
		'billing.country' : 'SE',
		'customer.givenName' : 'Joe',
		'customer.surname' : 'Doe',
		'cart.items[0].merchantItemId' : '1',
		'cart.items[0].discount' : '0.00',
		'cart.items[0].quantity' : '5',
		'cart.items[0].name' : 'Product 1',
		'cart.items[0].price' : '1.00',
		'cart.items[0].tax' : '6.00',
		'customParameters[KLARNA_CART_ITEM1_FLAGS]' : '32',
		'cart.items[1].merchantItemId' : '2',
		'cart.items[1].discount' : '0.00',
		'cart.items[1].quantity' : '1',
		'cart.items[1].name' : 'Product 2',
		'cart.items[1].price' : '1.00',
		'cart.items[1].tax' : '6.00',
		'customParameters[KLARNA_CART_ITEM2_FLAGS]' : '32'
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