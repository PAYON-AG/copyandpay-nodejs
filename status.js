var http = require('https');

function getPaymentStatus(checkoutId, callback) {
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: '/v1/checkouts/' + checkoutId + '/payment',
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};
	var getRequest = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			return callback(JSON.parse(chunk));
		});
	});
	getRequest.end();
	  
}
  
getPaymentStatus("7D00D34139BA32C4107CA97C1653F1B7.sbg-vm-tx02", function(status) {
	if (status["result"]["code"].substring(0, 3) === "000") {
		console.log("SUCCESS <br/><br/> Here is the result of your transaction: <br/><br/>");
		console.log(status);
	}
	else {
		console.log("ERROR <br/><br/> Here is the result of your transaction: <br/><br/>");
		console.log(status);
	}
	
});
  
